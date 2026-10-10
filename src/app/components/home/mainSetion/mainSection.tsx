import ProductCard from "./ProductComponents";

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

const MainSection = async () => {

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data = await res.json();

    console.log("all products",data);
    

    return(
        <>
        <div className=" pt-12 lg:w-7xl lg:mx-auto px-5 lg:px-0">
            <h1 className="text-red-600 font-bold pb-5 text-2xl">আজ দাম বেড়েছে ▲</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((item:Product )=>{
            if(item.today > item.yesterday){ 
                return <ProductCard key={item.id} item={item}/>
            }
        })}
        </div>
        </div>

        <div className=" pt-12 lg:w-7xl lg:mx-auto px-5 lg:px-0">
            <h1 className="text-green-700 font-bold pb-5 text-2xl">আজ দাম কমেছে ▼</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((item :Product)=>{
            if(item.today < item.yesterday){ 
                return <ProductCard key={item.id} item={item}/>
            }
        })}
        </div>


        
        </div>

        <div className=" pt-12 lg:w-7xl lg:mx-auto px-5 lg:px-0">
            <h1 className=" font-bold pb-3 text-2xl">সব পণ্য দেখানো হচ্চে </h1>
            <p className="text-zinc-400 font-bold pb-5">মোট {data.length.toLocaleString("bn-BD")} পণ্য দেখানো হচ্চে</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((item :Product , index:number)=>{
            
                return <ProductCard key={item.id} item={item}/>
        })}
        </div>


        
        </div>
        </>
    )
}
export default MainSection