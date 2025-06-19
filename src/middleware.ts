import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Routes protégées
  const protectedRoutes = ['/intros', '/profile', '/chromeextension']
  const authRoutes = ['/login', '/signup']

  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })

    // Vérifier que les variables d'environnement existent
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      // Si les variables ne sont pas configurées, laisser passer sans auth
      return response
    }

    const supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value,
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value,
              ...options,
            })
          },
          remove(name: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value: '',
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value: '',
              ...options,
            })
          },
        },
      }
    )

    const { data: { user } } = await supabase.auth.getUser()

    // Si l'utilisateur n'est pas connecté et essaie d'accéder à une route protégée
    if (!user && protectedRoutes.some(route => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Si l'utilisateur est connecté et essaie d'accéder aux pages d'auth
    if (user && authRoutes.some(route => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/intros', request.url))
    }

    return response
  } catch (error) {
    // En cas d'erreur, laisser passer sans redirection
    console.error('Middleware error:', error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     * - test-supabase (test page)
     */
    '/((?!_next/static|_next/image|favicon.ico|images|test-supabase).*)',
  ],
} 