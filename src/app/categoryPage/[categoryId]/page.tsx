import ProductCard from "@/app/components/home/mainSetion/ProductComponents";

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

type CategoryPageProps  ={
    params : Promise<{ categoryId: string }>
}

const CategoryPage = async ({params} :CategoryPageProps) => {

     const { categoryId } = await params
    console.log(categoryId);
    
    const categoryRes = await fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${categoryId}`)
    const categoryData = await categoryRes.json() 

     const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`)
     const data = await res.json();
     console.log(categoryId,data);
     console.log(categoryId,categoryData);
     

    return(
        <>
        <div className="mx-auto  pt-5">
<div className="stats shadow w-[400px] bg-zinc-100 md:w-[700px] lg:w-7xl ">
  <div className="stat">
      <div className="flex  items-center gap-3">
          <div>
              <p className="text-3xl">{categoryData.icon}</p>
          </div>
          <div>
          <div className="font-bold text-2xl">{categoryData.nameBn}</div>
          <div className="font-bold text-[18px] text-zinc-500">{data.length.toLocaleString("bn-BD")} টী পন্নের আজকের দাম</div>
          </div>
      </div>
  </div>

  

 
</div>
        </div>

        <div className="mx-auto  pt-5">
<div className="stats shadow w-[400px] bg-zinc-100 md:w-[700px] lg:w-7xl ">
  <div className="stat flex justify-end">
    <select defaultValue="Server location" className="select select-neutral">
  <option disabled={true}>Server location</option>
  <option>North America</option>
  <option>EU west</option>
  <option>South East Asia</option>
</select>


  </div>

  

 
</div>

        </div>

        <div className=" pt-12 lg:w-7xl lg:mx-auto px-5 lg:px-0 pb-20">
            <h1 className=" font-bold pb-5 text-2xl">মোট চারটি {data.length.toLocaleString("bn-BD")} টী পন্নের আজকের দাম দেখানো হচ্ছে</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((item :Product)=>{
             
                return <ProductCard key={item.id} item={item}/>
            
        })}
        </div>
        </div>
        
        </>
    )
}
export default CategoryPage