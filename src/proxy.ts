import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth' 
import { headers } from 'next/headers'

// This function can be marked `async` if using `await` inside
 async function proxy(request: NextRequest) {
   
   const session = await auth.api.getSession({
    headers:  await headers() 
   })
    
   const UserExist = session?.user
    
   if(!UserExist){ 
       return NextResponse.redirect(new URL('/sign-in?error=login-required', request.url))
   }
}
 
export const config = {
  matcher: '/detailsPage/:path',
}
export default proxy