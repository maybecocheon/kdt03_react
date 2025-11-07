import { useEffect, useState } from "react"
import { useAtomValue } from "jotai"
import { cntAtom, dbcntAtom } from "./atomsCnt.js"
import JotaiBt from "./JotaiBt.jsx"

export default function JotaiCnt() {
    /*
    // 1, 2. 함수와 useState 이용
    const [cnt, setCnt] = useState(0);
    const [dbcnt, setDbcnt] = useState(0);

    const onClickPlus = () => {
        setCnt(prev => prev + 1);
        setDbcnt(prev => prev + 2);
    }

    const onClickMinus = () => {
        setCnt(prev => prev - 1);
        setDbcnt(prev => prev - 2);
    }

    useEffect(() => {
        setDbcnt(2 * cnt);
    },[cnt])
    */

    // 3. atomValue(값 읽기 전용) 이용 => useState처럼 선언
    const cnt = useAtomValue(cntAtom);
    const dbcnt = useAtomValue(dbcntAtom);

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="font-extrabold text-4xl">Jotai 전역 상태관리</h1>
            <div className="w-1/4 text-center bg-yellow-100 p-5 m-5 rounded-lg">
                <p>count: {cnt}</p>
                <p>double count: {dbcnt}</p> {/* 여기서 {2 * cnt} 해도 됨*/}
            </div>
            {/* 1. 함수 자체를 전달 */}
            {/* <JotaiBt onHandlePlus={onClickPlus} onHandleMinus={onClickMinus}/> */}
            {/* 2. useState를 전달 */}
            {/* <JotaiBt cnt={cnt} setCnt={setCnt}/> */}
            {/* 3. atom 활용 */}
            <JotaiBt />
        </div>
    )
}
