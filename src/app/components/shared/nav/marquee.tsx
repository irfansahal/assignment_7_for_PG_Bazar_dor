

import Link from "next/link";
import Marquee from "react-fast-marquee";

interface Product {
    id: number;
    nameBn : string;
    image : string;
    today : number;
    change : {
        dir : string;
        pct : number
    }
}

const MarqueeComponents = async () => {
      
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data = await res.json()

    // console.log("From Marque",data);
    
    return(
        <>
            <div className="bg-[#F7F5F0] py-1 hidden md:block">
         <Marquee>
          {data.map((item :Product, index : number)=>{
            return<Link key={index} href={`/detailsPage/${item.id}`}>
               <div  className="px-4 hover:underline">
                <span className="pr-1 ">{item.nameBn}</span>
                <span className="pr-1 ">{item.image}</span>
                <span className="">{item.today.toLocaleString("bn-BD")} টাকা</span>
                <span className={item.change.dir=== "up" ? "text-red-500 px-2" : "text-green-600 px-2"}>{item.change.dir=== "up" ? "▼": "▲"}{item.change.pct.toLocaleString("bn-BD")}</span>
            </div> 
            </Link>
          })}
          </Marquee>
          </div>
        </>
    )
}
export default MarqueeComponents