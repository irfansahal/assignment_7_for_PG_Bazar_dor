 "use client"

import Link from 'next/link'
 import { authClient } from '../../../../lib/auth-client'

 const ThirdNav = () => {
    
        const { data : session , error } = authClient.useSession()
      const isUserExisting = session?.user 

      const logOutHandler = async () => {
         await authClient.signOut();
      }

    return(
        <>
        {isUserExisting ? <details className="dropdown">
  <summary className="btn m-1 text-green-700">{isUserExisting.email}</summary>
  <ul className="menu dropdown-content bg-zinc-200 rounded-box  w-50 p-2 shadow-sm">
    <li><div className='flex flex-col'>
          <h1 className='font-bold'>{isUserExisting.name}</h1>
          <p className='text-zinc-500 '>{isUserExisting.email}</p>
        </div></li>
    <li><Link href={'/profile'} className='text-blue-600'>আমার প্রফাইল</Link></li>
    <li>     <button className=" bg-zinc-200 text-red-600" onClick={logOutHandler}>লগ আউট করুন</button></li>
  </ul>
</details> :   
    <div className='flex'>
        <div>
            <Link href={'/sign-up'}>
            <button className="btn btn-neutral bg-white border-green-600 text-green-700 font-bold shadow-none">সাইন আপ</button>
            </Link>
        </div>
        <div>
            <Link href={'/sign-in'}>
            <button className="btn btn-neutral bg-green-700 border-0 shadow-none">সাইন ইন</button>
            </Link>
        </div>
    </div>
  }
        </>
    )
}

export default ThirdNav

