import Link from "next/link";

 interface Category {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
 }

const NavLinks = async () => {
    
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');
    const data : Category[] = await res.json();
    // console.log(data);
     
    

    return(
        <>
                <Link href={"/"}>
                <li>
                 <span>হোম</span>
                </li>
                </Link>
        {data.map((item : Category)=>{
            return <Link href={`/categoryPage/${item.slug}`} key={item.id}>
                <li>
                 <span><span>{item.icon}</span>{item.nameBn}</span>
                </li>
            </Link>
        })}
        </>
    )
}
export default NavLinks