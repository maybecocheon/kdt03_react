import FoodCard from "./FoodCard";
import fooddata from "./fooddata.json";

export default function FoodMain() {

    //FoodCard 여러개 불러오기
    let card = fooddata.map((fd, i) => <FoodCard key={i} data={fd}/>);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-scroll m-5">
        {card}
        </div>
    )
}
