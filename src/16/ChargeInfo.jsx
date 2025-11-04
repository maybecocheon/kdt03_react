import TailSelect from '../component/TailSelect.jsx'
import zcode from '../16/data/zcode.json'
import zscode from '../16/data/zscode.json'
import kind from '../16/data/kind.json'
import kinddetail from '../16/data/kinddetail.json'
import { useEffect, useState } from 'react'

export default function ChargeInfo() {
    // 데이터에서 select에 들어갈 값들만 배열로 추출
    let zcodeValues = Object.values(zcode);
    let zcodeKeys = Object.keys(zcode);
    let kindValues = Object.values(kind);
    let kindKeys = Object.keys(kind);

    let zscodeValues;

    console.log(zscode[11])

    const getFetchData = () => {
        
    }
    
    useEffect(() => {
        getFetchData();
        sel1.value != "" ? zscodeValues = zscode[zcodeKeys.indexOf(sel1.value)] : zscodeValues = [];
        console.log(sel1.value)
    }, [])
    
    return (
        <div>
            <h2 className="font-extrabold text-4xl">전기차 충전소 정보</h2>
            <div className="grid grid-cols-4 gap-4">
                <TailSelect id="sel1" title="시도" values={zcodeValues} />
                <TailSelect id="sel2" title="지역동" values={zscodeValues} />
                <TailSelect id="sel3" title="충전소구분" values={kindValues}  />
                {/* <TailSelect id="sel4" title="충전소상세" /> */}
            </div>
        </div>
    )
}
