"use client"

import { toast } from "react-toastify";
import { authClient } from "../../lib/auth-client";

const SignInPage = () => {

    
        const submitHandler =async (e:React.SubmitEvent<HTMLElement>) => {
            e.preventDefault(); 
            const formData = new FormData(e.target);
             const user = Object.fromEntries(formData.entries()) as { name : string ; email : string ; password : string}
             console.log("user",user);
        
            const {data , error} =await authClient.signIn.email({
                ...user,
                 callbackURL: "/" 
            });
             
            if(data){
                console.log(data);
                toast.success("আপনি সফলভাবে রেজিস্ট্রিসন করেছেন")
                //redirect("/")
            }
            if(error){
                console.log(error)
                toast.error("আপনি রেজিস্ট্রিসন করতে বেরথ হয়েছেন")
            }
        

        
    }

    return(
        <>
        <div className="flex flex-col items-center justify-center pt-7">
            <h1 className="text-2xl font-bold">সাইন ইন</h1>  
            <p className="font-bold text-zinc-500">বিস্তারিত দাম, বাঁজার তুলনা ও প্রোফাইল দেখতে একাউন্টে ঢুকন</p>          
         </div>
        <div className="pt-5 flex items-center justify-center">
            <form onSubmit={submitHandler}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  
  <label className="label font-bold text-black">ইমেইল</label>
  <input type="email" name="email" className="input " placeholder="Email" />

  <label className="label font-bold text-black">পাসওয়ার্ড</label>
  <input type="password" name="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4 bg-green-700 border-0 font-bold" type="submit">সাইন ইন করুন</button>
</fieldset>
            </form>

        </div>
        </>
    )
}
export default SignInPage