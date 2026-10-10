import Image from "next/image"

const HeroSection =  () => {

     const date = new Date;
     const today = date.toLocaleString("bn-BD", {
         dateStyle: "full"
     })

    return(
        <>
        <div className="hero bg-base-200 rounded-2xl  lg:w-7xl lg:mx-auto ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
      alt="hero_iamge"
      src="/bazar-hero.png"
      width={300}
      height={300}
      className="max-w-sm rounded-lg "
    />
    <div className="flex flex-col items-center justify-center lg:justify-start  lg:items-start lg:pr-40">
        <div className="badge badge-soft badge-success bg-[#cef7c3] text-green-700 p-4 rounded-2xl  font-bold ">{today}</div>  
      <h1 className="text-4xl font-bold pt-3">আজকের বাজারের দাম এক নজরে</h1>
      <p className="py-6 text-zinc-500">
       চাল,ডাল,তেল,সবজি,মাছ,মাংস,ডিম ও মসলার দাম - বাজারভিত্তিক বিস্তারিত, গড় ও সর্বনিম্ন-সরবাধিক এবং দামের পরিবর্তন এক জায়গায় 
      </p>
      <a href="#products"><button className="btn btn-success bg-green-700 text-white" >সব পণ দেখুন</button></a>
    </div>
  </div>
</div>
        </>
    )
}
export default HeroSection