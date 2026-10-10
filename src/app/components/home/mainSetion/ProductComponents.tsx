import Link from "next/link";

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
    unit : string;

}
const ProductCard = ({item} : { item : Product}) => {
  console.log("from cart",item);
  
    return(
        <>
       <Link href={`/detailsPage/${item.id}`}>
       <div className="">
            <div className="">
             <div className="card card-dash bg-zinc-100 ">
  <div className="card-body">
    <div className="flex gap-5">
      <div className="w-[60px] h-[60px] bg-white rounded-3xl flex justify-center items-center"><span className="text-2xl">{item?.image}</span></div>
     <div>
      <h2 className="card-title">{item.nameBn}</h2>
    <p className="font-bold text-zinc-500">প্রতি {item.unit}</p>
     </div>
    </div>
    <div className="flex justify-between">
     <div>
      <p className="text-zinc-500 text-[18px]">আজকের দাম</p>
    <p className="text-zinc-500 text-[18px]"><span className="text-2xl font-bold">{item.today.toLocaleString("bn-BD")}</span> টাকা</p>
      </div> 
      <div className="flex items-end">
<div className="badge badge-soft badge-success" ><span className={item.change.dir === "up" ? "text-red-500 px-2 font-bold text-[18px]" : "text-green-600 px-2 font-bold text-[18px]"}>{item.change.dir !== "flat" ? ( item.change.dir === "up" ? "▲" : "▼") : "➖"} {item.change.pct.toLocaleString("bn-BD")} %</span></div>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
       </Link> 
        </>
    )
}
export default ProductCard