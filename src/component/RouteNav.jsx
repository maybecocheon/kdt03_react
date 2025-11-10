import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function RouteNav() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/festival");
    }

    return (
        <div className="w-full h-1/2 mt-5 flex justify-center items-center gap-4 font-bold bg-blue-500 rounded-md p-3 ">
            <Link to="/" className="font-extrabold hover:cursor-pointer hover:text-gray-300">홈</Link>
            <Link to="/lotto" className="font-bold hover:cursor-pointer hover:text-gray-300">로또</Link>
            <Link to="/boxoffice" className="font-bold hover:cursor-pointer hover:text-gray-300">일일박스오피스</Link>
            <Link to="/gallery" className="font-bold hover:cursor-pointer hover:text-gray-300">관광정보갤러리</Link>
            <button onClick={handleClick} className="font-bold hover:cursor-pointer hover:text-gray-300">부산축제정보</button>
            <Link to="/chargeInfo" className="font-bold hover:cursor-pointer hover:text-gray-300">전기차충전소정보</Link>
            <Link to="/todolist" className="font-bold hover:cursor-pointer hover:text-gray-300">할일목록</Link>
        </div>
    )
}