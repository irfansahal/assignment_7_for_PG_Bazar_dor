"use client"

import Link from "next/link"
import { authClient } from "../../lib/auth-client" 
import Image from "next/image"

const Profile = () => {

    const { data :session , error } = authClient.useSession()
    
    const user = session?.user 

       const logOutHandler = async () => {
         await authClient.signOut();
      }

      const submitHandler = async (e:React.SubmitEvent<HTMLElement>) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const user = Object.fromEntries(formData.entries());
          
          const { data : updatedUser , error} = await authClient.updateUser({
            ...user
          })
          console.log(updatedUser);
          
      }

  return(
    <>
    <div className=" flex items-center justify-center py-15">
        <div className=" bg-zinc-100 flex flex-col justify-center p-10 gap-3">
            <div className="text-start">
                <h1 className="font-bold text-2xl ">আমার প্রুফাইল</h1>
                <p className="font-bold text-zinc-500">আপনার একাউন্ট এর তথ্য এখানে দেখুন</p>
            </div>
            <div>
               <div className="stats stats-vertical lg:stats-horizontal bg-white shadow w-[300px] sm:w-[400px] lg:w-[600px]">
  <div className="stat">
    <div className="flex gap-4">
<div className="avatar">
  <div className="w-24 rounded">
    <Image alt="Profile avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Qd0e_lK5wuOTP3_fZ-QynqZUdpEAdc1IwexeP5qp_g&s=10" width={200} height={200} />
  </div>
</div>
        
        <div>    
    <div className="stat-value">{user?.name}</div>
    <div className="stat-desc">{user?.email}</div>
        </div>
    </div>
  </div>

 

  <div className="stat flex items-center justify-center">
    <button className="btn btn-outline btn-secondary" onClick={logOutHandler}>সাইন আউট করুন</button>
  </div>
</div>
            </div>
            <div>
               <form onSubmit={submitHandler}>
                <fieldset className="fieldset bg-white border-base-300 rounded-box w-xs border p-4 w-[300px] sm:w-[400px] lg:w-[600px]">
 
  <label className="label">নাম</label>
  <input type="name" className="input w-full" name="name" placeholder="Name" />

  <button className="btn btn-neutral mt-4 bg-green-800 border-0" type="submit">আপডেট</button>
</fieldset>
               </form>
            </div>
        </div>
    </div>
    <Link href="/" className='text-green-700 font-bold'><span className='text-4xl pt-4'>⮜── </span> মূল পৃষ্ঠায় ফিরে যান</Link>
    </>
  )
}
export default Profile