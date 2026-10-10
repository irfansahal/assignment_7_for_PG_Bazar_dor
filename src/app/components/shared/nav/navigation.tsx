// "use client"
import Image from "next/image"
import NavLinks from "./navLinks";
import UserInformation from "./thirdNav";
import ThirdNav from "./thirdNav";

const Navigation = () => {

     const date = new Date;
     const today = date.toLocaleString("bn-BD", {
        dateStyle: "full"
     })
    //  console.log(today);
     
        

    return(
        <div className="w-full mx-auto">
       
<div className="max-lg:collapse bg-white  shadow-[1px] w-full rounded-md px-3 lg:px-7 pt-2">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    
      <div className="flex gap-3 items-center justify-center">
        <div className="bg-green-500 w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] flex justify-center items-center rounded-2xl">
        <Image src="/logo-icon.png" alt="logo" width={30} height={30} className="w-[25px] h-[25px] sm:h-[30px] sm:w-[30px]"/>
    </div>
     <div>
         <h1 className="font-bold text-[18px] sm:text-2xl font-serif">বাজার দর</h1>
         <p className="text-zinc-500 text-[12px] sm:text-[16px] font-serif">{today}</p>
     </div>
    </div>
    </div>
    
    <div className="navbar-end lg:pr-5">
          <ThirdNav/>
    </div>
  </div>

<div className="flex justify-start ">
    <div className="navbar-center hidden md:flex ">
      <ul className="menu menu-horizontal px-1 ">
        <NavLinks/>
      </ul>
    </div>
</div>

  <div className="collapse-content md:hidden z-1">
    <ul className="menu">
        <NavLinks/> 
    </ul>
 
  </div>
</div>

       
        </div>
    )
}
export default Navigation

 