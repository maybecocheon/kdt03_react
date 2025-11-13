import { useRef, useState } from "react";
import SubwayCard from "./SubwayCard";
import sarea from "./data/sarea.json";
import TailSelect from "../component/TailSelect";

export default function Subway() {
    // data 저장해 두기
    const [subDatas, setSubDatas] = useState();

    // 지하철 장소 값 참조
    const areaRef = useRef();

    const getFetchData = async () => {
        const dt = new Date().toISOString().slice(0, 10).replaceAll("-", "") - 1;
        const apiKey = import.meta.env.VITE_PUBLIC_API;
        let url = `/api/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey=${apiKey}&pageNo=1&numOfRows=24&resultType=json`;
            url = url + `&controlnumber=${dt}&areaIndex=${areaRef.current.value}`;
        const resp = await fetch(url);
        const data = await resp.json();
        const subData = data.response.body.items.item.sort((a, b) => a.controlnumber - b.controlnumber); // 데이터 뽑아 내고 정렬
        setSubDatas(subData);
    }


    const onClickArea = () => {
        getFetchData();
    }

    return (
        <div className="w-full h-full p-5">
            <div className="p-5 flex">
                <p className="w-9/10 h-full font-extrabold text-4xl">측정소 선택</p>
                <TailSelect title="측정소" ref={areaRef} keys={sarea.map(item => item["코드"])} values={sarea.map(item => item["측정소"])} onHandle={onClickArea} />
            </div>
            <div className="w-full h-auto overflow-y-auto">
                {
                    subDatas ? subDatas.map((item, idx) => <SubwayCard key={idx} idx={idx} dt={item} />) : ""
                }
            </div>
        </div>
    )
}
