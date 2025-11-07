import { useLocation, useNavigate } from "react-router-dom"
import stat from "./data/stat.json"

export default function ChargerDetail() {
    const location = useLocation();
    const contents = location.state.contents;

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/chargeInfo");
    }

    const findIndex = () => {
        let num = Object.keys(stat).indexOf(contents.stat);
        if (num != -1) {
            return Object.values(stat)[num];
        } else {
            return "";
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <h2 className="font-extrabold text-4xl m-10 text-center p-5 text-black bg-blue-50">{contents.statNm}</h2>
            <div className="w-1/2 h-auto mt-5 m-3 shadow-lg rounded-4xl p-5 border-1 border-blue-400">
                    <div className="flex p-2">
                        <p className="w-30 text-right font-bold pr-5">위치</p>
                        <p>{contents.addr} {contents.addrDetail != null ? contents.addrDetail : ""} {contents.location}</p>
                    </div>
                    <div className="flex p-2">
                        <p className="w-30 text-right font-bold pr-5">상태</p>
                        <p>{findIndex()}</p>
                    </div>
                    <div className="flex p-2">
                        <p className="w-30 text-right font-bold pr-5">이용 시간</p>
                        <p>{contents.useTime}</p>
                    </div>
                    <div className="flex p-2">
                        <p className="w-30 text-right font-bold pr-5">운영기관명</p>
                        <p>{contents.busiNm}</p>
                    </div>
                    <div className="flex p-2">
                        <p className="w-30 text-right font-bold pr-5">운영기관<br/>전화번호</p>
                        <p className="text-center">{contents.busiCall}</p>
                    </div>
            </div>
            <div className="flex justify-center text-center">
                <button onClick={handleClick} className="p-3 bg-blue-400 w-15 text-white font-bold m-5 rounded-md hover:bg-blue-300 hover:cursor-pointer">목록</button>
            </div>
        </div>
    )
}
