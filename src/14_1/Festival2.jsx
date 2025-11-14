import { useEffect, useState, useRef } from "react";
import TailCard from "../component/TailCard";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useAtom } from "jotai";
import { selGuAtom, festivalFetchData } from "./atomFestival";
import loading from "../assets/ic_loading_img.gif"

export default function Festival2() {
    return (
        <Suspense fallback={<img src={loading} alt="loading"/>}>
            <FestivalContent />
        </Suspense>
    );
}

function FestivalContent() {
    // atom으로 전역변수 가지고 오기
    const [tdata] = useAtom(festivalFetchData);
    const [gu, setGu] = useAtom(selGuAtom);
    const [area, setArea] = useState([]);
    const [areaFestival, setAreaFestival] = useState([]);

    const selRef = useRef();
    const handleSelected = () => {
        setGu(selRef.current.value);
    }

    useEffect(() => {
        if (gu == "") {
            setAreaFestival(tdata);
        } else {
            setAreaFestival(tdata.filter(item => item.GUGUN_NM == gu));
        }
    }, [gu, tdata])

    useEffect(() => {
        if (tdata.length == 0) return;
        const tm = [...new Set(tdata.map(item => item.GUGUN_NM))].sort().map((item, i) => <option key={i} value={item}>{item}</option>);
        setArea(tm);
        setAreaFestival(tdata);
    }, [tdata])

    return (
        <div className="w-full h-full p-5 flex flex-col items-center gap-3">
            <div className="w-full p-10 text-center font-extrabold text-4xl mb-5 text-black bg-blue-50">부산 축제 정보</div>
            {/* <select value={selectedValue} onChange={handleSelected} className="w-1/5 p-2 border-1 border-black text-center bg-blue-50 rounded-md"> */}
            <select ref={selRef} onChange={handleSelected} className="w-1/5 p-2 border-1 border-black text-center bg-blue-50 rounded-md">
                <option value="" selected>== 모든 지역 ==</option>
                {area}
            </select>
            <div className="w-full h-auto p-5 flex flex-wrap grid-cols-3 justify-center gap-4">
                {
                    areaFestival.map((item, i) =>
                        <Link key={i} state={{ contents: item }} to="/festival/contents">
                            <TailCard key={i} source={item.MAIN_IMG_THUMB} title={item.TITLE} subtitle={item.USAGE_DAY_WEEK_AND_TIME} keyword={item.PLACE} /></Link>)
                }
            </div>
        </div>
    )
}
