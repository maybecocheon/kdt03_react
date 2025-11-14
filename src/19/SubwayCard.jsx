import scode from "./data/scode.json"

export default function SubwayCard({ dt, idx }) {
    // 시간
    let time = `${dt.controlnumber.slice(0, 4)}. ${dt.controlnumber.slice(4, 6)}. ${dt.controlnumber.slice(6, 8)}. `;
    time = time + `${dt.controlnumber.slice(8, 10)}시`;

    return (
        <div className="pt-5">
            <div className="bg-gray-200 p-2 rounded-md w-2/9 flex flex-col items-center">
                <span className="font-bold">{dt.site} {dt.city} </span> 
                <span className="text-gray-500">(시각: {time})</span>
            </div>
            <div className="flex gap-2 w-full mt-2">
                {   // scode의 값 가지고 와서 dt랑 비교
                    Object.entries(scode).map((item, i) =>
                        idx % 2 == 0 ?
                            <div key={i} className="text-center w-1/9 h-30 text-sm">
                                <div className="bg-sky-800 p-2 w-full text-white">{item[1]["name"]}<br />({item[0]})</div>
                                <div className="bg-sky-50 p-2">{dt[item[0]]}{item[1]["unit"]}</div>
                            </div>
                            :
                            <div key={i} className="text-center w-1/9 h-30 text-sm">
                                <div className="bg-gray-800 p-2 w-full text-white">{item[1]["name"]}<br />({item[0]})</div>
                                <div className="bg-gray-100 p-2">{dt[item[0]]}{item[1]["unit"]}</div>
                            </div>
                    )
                }
            </div>
        </div>
    )
}
