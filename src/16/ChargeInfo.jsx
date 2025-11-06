import TailSelect from '../component/TailSelect.jsx'
import TailButton from '../component/TailButton.jsx'
import zcode from '../16/data/zcode.json'
import zscode from '../16/data/zscode.json'
import kind from '../16/data/kind.json'
import kinddetail from '../16/data/kinddetail.json'
import { useEffect, useRef, useState } from 'react'
import TailCard from '../component/TailCard.jsx'
import ChargedCard from './ChargedCard.jsx'
import statJson from '../16/data/stat.json'

export default function ChargeInfo() {
    // 데이터에서 sel1에 들어갈 값들만 배열로 추출
    let zcodeValues = Object.values(zcode);
    let zcodeKeys = Object.keys(zcode);

    // select 된 값 불러오기 위해 ref 변수 설정
    const sel1Ref = useRef();
    const sel2Ref = useRef();
    const sel3Ref = useRef();
    const sel4Ref = useRef();

    // sel2 값 정하기
    const [zscodeKey, setZscodeKey] = useState();
    const [zscodeValue, setZscodeValue] = useState();
    const onZcodeClick = () => {
        // for문 돌릴 필요가 없음 
        // let zscodeKeys = Object.keys(zscode);
        //  console.log("zscodeKeys", zscodeKeys);
        // for (let i of zscodeKeys) {
        //     if (sel1Ref.current.value == i) {
        //         setZscodeValue(Object.keys(zscode[i]));
        //         // setZscodeValue(Object.keys(Object.values(zscode)[i]));
        //         setZscodeKey(Object.values(zscode[i]))
        //         break;
        //     }
        // }

        // 지역동 이름
        setZscodeValue(Object.keys(zscode[sel1Ref.current.value]))
        // 51240 어쩌고 내용
        setZscodeKey(Object.values(zscode[sel1Ref.current.value]))
    }

    // sel3 값 정하기
    const [kindKey, setKindKey] = useState();
    const [kindValue, setKindValue] = useState();
    const onZscodeClick = () => {
        // 충전소 유형
        setKindValue(Object.values(kind))
        // 충전소 키값
        setKindKey(Object.keys(kind))
    }

    // sel4 값 정하기
    const [kinddetailKey, setKinddetailKey] = useState();
    const [kinddetailValue, setKinddetailValue] = useState();
    const onKindClick = () => {
        // 충전소 유형 상세 내용
        setKinddetailValue(Object.keys(kinddetail[sel3Ref.current.value]))
        // 충전소 상세 내용 키값
        setKinddetailKey(Object.values(kinddetail[sel3Ref.current.value]))
    }

    // 각 내용 카드로 불러오기
    const [loading, setLoading] = useState(false);
    const [card, setCard] = useState([]);
    const [stats, setStats] = useState([]);
    const getFetchdata = async () => {
        const apiKey = import.meta.env.VITE_PUBLIC_API;
        let url = `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?serviceKey=${apiKey}`
        url = url + `&numOfRows=10&pageNo=1&zcode=${sel1Ref.current.value}&zscode=${sel2Ref.current.value}&kind=${sel3Ref.current.value}&kinddetail=${sel4Ref.current.value}&dataType=JSON`;
        // 로딩중 표시
        setLoading(true);
        setStats([]);
        setCard([]);
        // fetch 시작
        const resp = await fetch(url);
        const data = await resp.json();
        // url data 불러 오기
        let text = data.items.item;
        let info = text.map((item, idx) => <div key={idx} className="p-5 border-1 border-black rounded-md">{item.statNm}</div>);
        setCard(info);
        // stat
        let statCard = Object.keys(statJson).map(scode => <ChargedCard key={scode} title={statJson[scode]} count={text.filter(item => item.stat == scode).length}/>)
        setStats(statCard);
        setLoading(false);
    }

    const onSearchClick = () => {
        // 선택 안 했을 때 알람
        if (sel1Ref.current.value == ""){
            alert("시도를 선택하세요.");
            sel1Ref.current.focus();
            return;
        }
        if (sel2Ref.current.value == ""){
            alert("지역동을 선택하세요.");
            sel2Ref.current.focus();
            return;
        }
        if (sel3Ref.current.value == ""){
            alert("충전소 구분을 선택하세요.");
            sel3Ref.current.focus();
            return;
        }
        if (sel4Ref.current.value == ""){
            alert("충전소 상세 구분을 선택하세요.");
            sel4Ref.current.focus();
            return;
        }
        getFetchdata();
    }

    // fetch 완료되면
    useEffect(()=>{
        if (length == 0) return;
    },[card])

    // 취소하기
    const onCancelClick = () => {
        // window.location.reload();
        sel1Ref.current.value = "";
        sel2Ref.current.value = "";
        sel3Ref.current.value = "";
        sel4Ref.current.value = "";

        setCard([]);
        setStats([]);
        setLoading(false);
    }

    return (
        <div className="h-full w-full p-5">
            <h2 className="font-extrabold text-4xl mb-10">전기차 충전소 정보</h2>
            <div className="flex flex-row gap-4 w-full bg-amber-50 p-5 mb-5">
                <TailSelect id="sel1" title="시도" ref={sel1Ref} values={zcodeValues} keys={zcodeKeys} onHandle={onZcodeClick} />
                <TailSelect id="sel2" title="지역동" ref={sel2Ref} values={zscodeValue} keys={zscodeKey} onHandle={onZscodeClick} />
                <TailSelect id="sel3" title="충전소구분" ref={sel3Ref} values={kindValue} keys={kindKey} onHandle={onKindClick} />
                <TailSelect id="sel4" title="충전소상세" ref={sel4Ref} values={kinddetailValue} keys={kinddetailKey} />
                <TailButton color="blue" caption="검색" onHandle={onSearchClick} />
                <TailButton color="orange" caption="취소" onHandle={onCancelClick} />
            </div>
            <div className="font-extrabold text-4xl mb-10 w-full text-center">
                {loading ? "로딩 중..." : ""}
            </div>
            <div className="flex flex-row justify-center gap-4 w-full p-5 mb-5">
                {stats.length != 0 ? <ChargedCard title="충전소수" count={card.length}/> : ""}
                {stats}
            </div>
            <div className="h-auto w-full grid grid-cols-4 text-center gap-2">
                {card}
            </div>
        </div>
    )
}
