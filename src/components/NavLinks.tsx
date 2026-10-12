import Link from "next/link";
interface navs {
    slug: string;
    nameBn: string

}


const NavLinks =async () => {
    const res= await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
    const data:navs[] = await res.json()
    
 
   return (
    <div className="border border-gray-200 ">
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-10 py-3">
        {data.map((n, i) => (
          <Link
            key={i}
            href={n.slug}
            className="flex items-center gap-1 text-sm text-gray-800 whitespace-nowrap hover:text-red-700"
          >
            <span>
              {["🍚", "🫘", "🛢️", "🥬", "🐟", "🍗", "🥛", "🌶️"][i % 8]}
            </span>
            <span>{n.nameBn}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default NavLinks;



