//btStyle 객체: 버튼 색상별 Tailwind CSS 클래스 정의
const btStyle = {
        blue: {
            base: "bg-blue-600",
            hover: "hover:bg-blue-200 hover:text-blue-950"
        },
        orange: {
            base: "bg-orange-600",
            hover: "hover:bg-orange-200 hover:text-orange-950"
        },
        green: {
            base: "bg-green-600",
            hover: "hover:bg-green-200 hover:text-green-950"
        }
    }
    
export default function TailButton({color, caption, onHandle}) {

    //btStyle 객체에서 color에 해당하는 스타일 가져오기
    //예: color가 "blue"이면 btStyle["blue"] 반환
    //btStyle.blue = btStyle["blue"] => color라는 변수로 접근하려면 무조건 대괄호 표기법 사용
    const bt = btStyle[color];

    return (
        <div>
            {/* 변수 사용하려면 표현식 안에 넣어 주어야 함 */}
            <button type="button" className={`rounded-md p-5 text-white hover:cursor-pointer hover:font-extrabold ${bt.base} ${bt.hover}`}
                        onClick={onHandle}>{caption}</button>
        </div>
    )
}
