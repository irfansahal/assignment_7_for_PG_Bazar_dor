
type DetailsPageProps  ={
    params : Promise<{ productId: string }>
}
type Mrket = {
    market: string,
    division: string,
    min: number,
    max: number
}
const ProductDetails = async ({params}:DetailsPageProps) => {
    
    const { productId } = await params
    console.log("productId", productId);
    
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${productId}`);
    const productDetailsData = await res.json(); 
   
    console.log("productDetailsData",productDetailsData);
    
    const increacedPrice = productDetailsData.today - productDetailsData.yesterday
   console.log("increacedPrice",increacedPrice);
    
    let maxPrice = 0
     productDetailsData.markets.forEach((item:Mrket)=>{
        if(item.max > maxPrice){
            maxPrice = item.max
        }
    })
     console.log("markets" , maxPrice , productDetailsData.markets);
     
    let minPrice = 1000
     productDetailsData.markets.forEach((item:Mrket)=>{
        if(item.min < minPrice){
            minPrice = item.min
        }
    })
     console.log("markets min" , minPrice , productDetailsData.markets);
     
      const ArrayOFaverage : number[] = []
      productDetailsData.markets.forEach((item:Mrket)=>{
          const sum:number = item.min + item.max 
          ArrayOFaverage.push(sum / 2)
             
        })
        
        const averageOFArray = ArrayOFaverage.reduce((current, item)=>current + item ,0);
        console.log(ArrayOFaverage);
        console.log("averageOFArray",averageOFArray );
        const avaragePrice = Math.floor(751 / ArrayOFaverage.length)
     
     return(
        <>
         <h1>this is productg details page</h1>  
          <div className="mx-auto  pt-5">
<div className="stats shadow w-[400px] bg-zinc-100 md:w-[700px] lg:w-7xl ">
  <div className="stat flex flex-col gap-5 items-center lg:flex lg:flex-row lg:justify-between">
      <div className="flex  items-center gap-3">
          <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] bg-white rounded-3xl flex justify-center items-center">
              <p className="text-3xl lg:text-4xl">{productDetailsData.image}</p>
          </div>
          <div>
          <div className="font-bold text-2xl">{productDetailsData.nameBn}</div>
            <div className="font-bold text-[18px] text-zinc-500">প্রতি  {productDetailsData.unit} {productDetailsData.nameBn}</div>
              <div className="text-[16px] text-black">গত কালের তুলনায় আজ দাম <span className="font-bold">বেড়েছে </span> <span className="text-2xl font-bold"> - {increacedPrice > 0 ? increacedPrice.toLocaleString("bn-BD") : "০"}</span> টাকা</div> 
          </div>
      </div>
      <div className="flex items-center">
      <div className="w-[140px] h-[160px] rounded-2xl bg-white flex flex-col justify-center items-center  gap-1">
        <div className="text-zinc-600">আজকের দাম</div>
        <div className="text-3xl font-bold">{productDetailsData.today.toLocaleString("bn-BD")}</div>
        <div className="text-zinc-600">টাকা / {productDetailsData.unit}</div>
        <div><div className=" " ><span className={productDetailsData.change.dir === "up" ? "text-red-500 px-2 font-bold text-[18px]" : "text-green-600 px-2 font-bold text-[18px]"}>{productDetailsData.change.dir !== "flat" ? ( productDetailsData.change.dir === "up" ? "▲" : "▼") : "➖"} {productDetailsData.change.pct.toLocaleString("bn-BD")} %</span></div>
</div> 
      </div>
      </div>
  </div>

  

 
</div>
        </div>

      <div className="bg-zinc-100 rounded-2xl mx-3 lg:mx-6 my-7 pb-7">
        <div className=" pt-7">
           <div className=" flex flex-col justify-center items-center">
               <div className="flex flex-col gap-4 lg:flex lg:flex-row  gap-5 ">
 {/* min price */}
                 <div className="card bg-white w-96 shadow-sm">
  <div className="card-body">
    <div className="card-actions justify-start">
       <div className="flex flex-col items-start gap-1">
        <div>সর্বনিম্ন দাম</div>
       <div className="text-2xl font-bold text-green-600">{minPrice.toLocaleString("bn-BD")} টাকা</div>
       <div>সবচেয়ে কমদামের বাজার</div> 
       </div>
    </div>
  </div>
</div>

 {/* max price */}
<div className="card bg-white w-96 shadow-sm">
  <div className="card-body">
    <div className="card-actions justify-start">
      <div className="flex flex-col items-start gap-1">
        <div>সর্বধিক দাম</div>
       <div className="text-2xl font-bold text-red-600">{maxPrice.toLocaleString("bn-BD")} টাকা</div>
       <div>সবচেয়ে বেশি দামের বাজার</div> 
       </div>
    </div>
    
  </div>
</div>

   {/* avarege price*/}
<div className="card bg-white w-96 shadow-sm">
  <div className="card-body">
    <div className="card-actions justify-start">
      <div className="flex flex-col items-start gap-1">
        <div>গড় দাম</div>
       <div className="text-2xl font-bold text-green-600">{avaragePrice.toLocaleString("bn-BD")} টাকা</div>
       <div>প্রতি কজি এর হিসাবে</div> 
       </div>
    </div>
   
  </div>
</div>

               </div>
               <div>

               </div>
           </div>
        </div> 

        <div className=" px-10 pt-10">
            <h1 className="font-bold text-lg pb-4">বাঁজারভিত্তিক আজাকের দাম</h1>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>বাঁজার</th>
        <th>বিভাগ</th>
        <th>সর্বনিম্ন</th>
        <th>সর্বধিক</th>
        <th>গড়</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {productDetailsData.markets.map((item:Mrket, index:number)=>{
        return <tr key={index}>
        <th>{item.market}</th>
        <td>{item.division}</td>
        <td>{item.min.toLocaleString("bn-BD")}</td>
        <td>{item.max.toLocaleString("bn-BD")}</td>
        <td className="font-bold">{Math.floor(((item.max + item.min) / 2)).toLocaleString("bn-BD")}</td>
      </tr>
       })}
      {/* row 2 */}
       
      {/* row 3 */}
      
    </tbody>
  </table>
  </div>
</div>
        </div>
        </>
    )
}
export default ProductDetails