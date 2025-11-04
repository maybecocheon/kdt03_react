import { useParams } from "react-router-dom"

export default function RoutePage1() {
    // useParams: 경로 파라미터 읽기
    // Link에서 보낸 값 받음
    const {item1, item2} = useParams();

    return (
        <div>
            RoutePage1
            {item1} {item2}
        </div>
    )
}
