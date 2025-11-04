import { useSearchParams } from "react-router-dom"

export default function RoutePage2() {
    // useSearchParams: 쿼리스트링 읽기
    // useNavigate 쓸 때 주로 같이 씀
    const [sParams] = useSearchParams();

    return (
        <div>
            RoutePage2
            {/* useSearchParams는 배열 안에 있는 값을 키로 읽어 옴 => 그냥 그게 문법임 */}
            {sParams.get("item1")}{sParams.get("item2")}
        </div>
    )
}
