import React from 'react'

export default function TrafficInfo({ infoData }) {
    const show = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];

    return (
        <div className='flex justify-center'>
            <div className='flex text-center gap-10'>
                {/* 도로 종류에 따른 구분 */}
                <div className='flex flex-col justify-center w-40 h-15 bg-green-600 m-10 rounded-md text-xl'>{infoData["도로종류"]}</div>
                <div className='flex items-center gap-4'>
                    {/* 배열을 돌아서 값 꺼내 오기 */}
                    {show.map(item => <div key={item} className='w-30 h-15 rounded-md'>
                                        <div className='w-full h-1/2 bg-amber-300'> {item} </div>
                                        <div className='w-full h-1/2 bg-amber-100'>{infoData[item]}</div>
                                    </div>)}
                </div>
            </div>
        </div>
        
    )
}
