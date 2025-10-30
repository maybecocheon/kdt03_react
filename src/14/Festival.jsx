import { useEffect, useState } from 'react'
import TailCard from '../component/TailCard';

export default function Festival() {
    const apiKey = import.meta.env.VITE_PUBLIC_API;

    // card와 option과 선택 옵션 뿌리기
    const [card, setCard] = useState([]);
    const [optionlist, setOptionlist] = useState([]);
    const [selectedValue, setSelectedValue] = useState();

    const handleSelected = e => setSelectedValue(e.target.value);

    // 데이터 가져오기
    const getFetchData = async () => {
        const url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apiKey}&pageNo=1&numOfRows=40&resultType=json`;

        const resp = await fetch(url);
        const data = await resp.json();
        let options = await data.getFestivalKr.item.map(item => item.GUGUN_NM);
        options = [...new Set(options)];
        options = options.map((item, i) =><option key={i} value={item}>{item}</option>);
        let infos = await data.getFestivalKr.item.filter(item => item.GUGUN_NM == selectedValue);
        infos = infos.map((item, i) =>
                            <TailCard key={i} source={item.MAIN_IMG_NORMAL} title={item.TITLE} address={item.TRFC_INFO} keyword={item.USAGE_DAY_WEEK_AND_TIME}/>);
        setCard(infos);
        setOptionlist(options);
    }

    useEffect(()=>{
        getFetchData();
    },[handleSelected])


    return (
        <div className='flex flex-col items-center gap-4 overflow-y-auto'>
            <div className='font-extrabold text-4xl m-10'>부산 축제 정보</div>
            <select value={selectedValue} onChange={handleSelected}>
                {optionlist}
            </select>
            <div className='flex flex-wrap justify-center gap-4'>
                {card}
            </div>
        </div>
    )
}
