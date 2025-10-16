import bank from '../assets/bank.png'
import market from '../assets/market.png'
import busan from '../assets/busan.png'
import { useState } from 'react';

export default function FoodCard({data}) {

    //click 함수 => click 하면 연락처와 팩스번호 가려지게 하기
    let [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(prev => !prev);
    }

  return (
    <div className="border-solid border-2 p-5 flex">
        <img src={data["구분"] == "광역지원센터"? busan
                        : data["구분"] == "기초푸드뱅크"? bank : market}
            alt={data["구분"]} className="w-40 h-40 mr-5"/>
        <div className='w-full'>
            <p className='font-extrabold text-2xl'> {data["사업장명"]} </p> <br/>
            <p className='font-bold text-xl'> {data["운영주체명"]}</p> <br/>
            <p> {data["사업장 소재지"]}</p> <br/>
            <div className={`p-2 text-sm bg-black ${click? 'text-white' : 'text-black'}`} onClick={handleClick}>
                <p>연락처(대표번호): {data["연락처(대표번호)"]}</p>
                <p>팩스번호: {data["팩스번호"]}</p>
            </div>  
        </div>
    </div>
  )
}
