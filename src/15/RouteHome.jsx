import TailButton from "../component/TailButton"
import { useNavigate } from "react-router-dom"

export default function RouteHome() {
    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-center">
            <div className="flex gap-4">
                <TailButton color="blue" caption="페이지1" onHandle={()=>navigate('/p1')}/>
                <TailButton color="blue" caption="페이지2" onHandle={()=>navigate('/p2')}/>
            </div>
        </div>
    )
}
