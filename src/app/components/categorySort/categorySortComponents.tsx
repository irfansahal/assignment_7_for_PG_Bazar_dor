"use client"


import { useState } from "react";
import ProductCard from "../home/mainSetion/ProductComponents"
import Link from "next/link"

interface Product {
    id: string;
    nameBn : string;
    image : string;
    today : number;
    yesterday : number;
    change : {
        dir : string;
        pct : number
    };
    unit: string;
}


const CategorySortComponents = ({data}:{data : Product[]}) => {
    
    const [ categoryData , setCategoryData  ] = useState([...data])

      
      
    const sortHandler = (value: string) => {
                   if(value === "FromLowToUp"){
            setCategoryData([...categoryData].sort((a, b)=> a.today - b.today))
        }else if(value === "FromUpToLow"){
            setCategoryData([...categoryData].sort((a, b)=> b.today - a.today))
        }else{
            setCategoryData([...data])
        }       
     }
     console.log("categoryData",categoryData);
     

    return(
        <>
        <div className="mx-auto  pt-5"> 
<div className="stats shadow w-[400px] bg-zinc-100 md:w-[700px] lg:w-7xl ">
  <div className="stat flex justify-end items-center">
    <h1 className="font-bold">সাজান</h1>
      <select defaultValue="Server location" className="select select-neutral" onChange={(e)=>sortHandler(e.target.value)}>
  <option disabled={true}>পণ্যের দাম অনুযায়ী সাজান</option>
  <option value="default"> ডিফল্ট </option>
  <option value="FromLowToUp"> দাম: কম থেকে বেশি </option>
  <option value="FromUpToLow"> দাম: বেশি থেকে কম</option>
</select>
  </div>

  

 
</div>

        </div>

        <div className=" pt-12 lg:w-7xl lg:mx-auto px-5 lg:px-0 pb-20">
            {data.length > 0 ? <h1 className=" font-bold pb-5 text-2xl">মোট চারটি {data.length.toLocaleString("bn-BD")} টী পন্নের আজকের দাম দেখানো হচ্ছে</h1>: <>
            <h1 className=" font-bold pb-5 text-2xl">আপনি যে ডেটা খুঁজছেন, তা পাওয়া যায়নি।</h1> <Link href="/" className='text-green-700 font-bold'><span className='text-4xl pt-4'>⮜── </span> মূল পৃষ্ঠায় ফিরে যান</Link>
            </> }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {categoryData.map((item :Product)=>{
             
                return <ProductCard key={item.id} item={item}/>
            
        })}
        </div>
        </div>
        </>
    )
}
export default CategorySortComponents