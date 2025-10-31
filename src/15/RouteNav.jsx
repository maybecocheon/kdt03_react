import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function RouteNav() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/p2?item1=수박&item2=오이");
    }

    return (
        <div className="w-full h-30 flex justify-center items-center gap-4 bg-amber-50 font-bold">
            <Link to="/" className="p-5 rounded-md bg-amber-200 hover:cursor-pointer hover:bg-amber-100 hover:text-gray-600">
                홈
            </Link>
            <Link to="/p1/사과/바나나" className="p-5 bg-amber-200 rounded-md hover:cursor-pointer hover:bg-amber-100  hover:text-gray-600">
                페이지1
            </Link>
            {/* <Link to="/p2" className="p-5 bg-amber-200 rounded-md hover:cursor-pointer hover:bg-amber-100 hover:text-gray-600"> */}
            <button onClick={handleClick} className="p-5 bg-amber-200 rounded-md hover:cursor-pointer hover:bg-amber-100 hover:text-gray-600">
                페이지2
            </button>
        </div>
    )
}