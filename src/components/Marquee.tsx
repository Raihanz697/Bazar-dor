import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


interface headlines{
  id:string;
  categoryIcon:string;
  nameBn:string;
  today:number;
  change:{
    dir:string;
    pct:number;
  }
}
const Marquee = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
  const data:headlines[] = await res.json()
  
  return (
    <div className="border-r border-gray-200 px-6">

      <MarqueeText direction="right" duration={80}>
        {data.map(d => <span key={d.id}>
          <span>{d.categoryIcon}</span>
          <span className="mx-2">{d.nameBn}</span>
          <span>
            {d.today.toLocaleString("bn-BD")} টাকা/কেজি
          </span>


          <span
            className={`mx-2 ${d.change.pct > 0
                ? "text-red-500"
                : d.change.pct < 0
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
          >
            {d.change.pct > 0 ? "▲" : d.change.pct < 0 ? "▼" : "—"}

            {Math.abs(d.change.pct).toLocaleString("bn-BD")}%
          </span>



          <span>︱</span>

        </span>)}
      </MarqueeText>
    </div>
  );
};

export default Marquee;