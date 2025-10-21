import FoodCard from "./FoodCard";
import fooddata from "./fooddata.json";
import TailButton from "../component/TailButton";
import { useState } from 'react';

//FoodCard 여러개 불러오기
// let card = foodData.map((fd, i) => <FoodCard key={i} data={fd} />);

//1. 법인명에 따라 분류
//2. 중복 제거
const corpData = [...new Set(fooddata.map((fd) => fd["운영주체 분류"].replaceAll(" ", "")))];

export default function FoodMain() {

    //3. 버튼 만들기
    const corp = corpData.map((fd, i) =>
        <TailButton key={i} color="blue" caption={fd} onHandle={() => showCorp(fd)}/>);
    // 인수가 들어가면 콜백함수처럼 써줘야 함 => 형식: {() => {}}
    // “지금 바로 실행하지 말고, 나중에 버튼이 눌렸을 때 실행해줘” 라는 뜻
    // {showCorp(fd)}만 쓰면 “함수 자체” 가 아니라 “함수 실행 결과” 가 들어가는 거라서 오류남

    //onHandle 함수 => 버튼 클릭 시 카드 필터링
    //fooddata의 값을 바꾸어 줘야 함
    //useState 변수 1) 컴포넌트 함수 안에 선언해야 함 2) const로 타입 정해야 함 
    const [foodData, setFoodData] = useState(fooddata);
    const showAll = () => {
       setFoodData(fooddata);
    }
    const showCorp = (corpItem) => {
        setFoodData(fooddata.filter(fd => fd["운영주체 분류"].replaceAll(" ", "") === corpItem));
    }

    return (
        <div className="overflow-y-scroll m-5">
            <div className="flex justify-center gap-4 m-5 p-5 bg-blue-200">
                <TailButton key="전체" color="green" caption="전체" onHandle={showAll} />
                {corp}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {foodData.map((fd, i) => <FoodCard key={i} data={fd} />)}
            </div>
        </div>

    )
}
