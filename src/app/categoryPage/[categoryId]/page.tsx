
import CategorySortComponents from "@/app/components/categorySort/categorySortComponents";
import CategorySort from "@/app/components/categorySort/categorySortComponents";


type CategoryPageProps  ={
    params : Promise<{ categoryId: string }>
}

const CategoryPage = async ({params} :CategoryPageProps) => {
    
   
     const { categoryId } = await params
    console.log(categoryId);
    
    const categoryRes = await fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${categoryId}`)
    const categoryData = await categoryRes.json() 

     const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`)
     const data = await res.json();
     console.log(categoryId,data);
     console.log(categoryId,data.length);
     
     

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
          <div className="font-bold text-[18px] text-zinc-500">{data.length > 0 ? <span>{data.length.toLocaleString("bn-BD")} টী পন্নের আজকের দাম</span> : <span>কোনো তথ্য পাওয়া যাচ্ছে না।</span>}</div>
          </div>
      </div>
  </div>

  

 
</div>
        </div>

       <CategorySortComponents data={data}/>
        
        </>
    )
}
export default CategoryPage