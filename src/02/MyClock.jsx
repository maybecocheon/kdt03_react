import MyClockImage from "./MyClockImage"; //jsx는 생략 가능
import MyClockTime from "./MyClockTime";

//rfc + tab => 리액트 펑션 컴포넌트 자동 완성
function MyClock() {
  return (
    // 프레그먼트 태그(<>): 컴포넌트는 태그를 하나만 가질 수 있어서 프레그먼트 태그 안에 다른 태그들을 넣어서 하나의 태그로 묶어 줌
    // 아래와 같이 div나 다른 html 태그로 묶어 줄 수도 있음
    <div className="flex flex-col justify-center items-center border-solid border-4 border-amber-400 rounded-lg">
        <MyClockImage /> {/* 컴포넌트는 종료태그 반드시 써 줘야 함 */}
        <MyClockTime />
    </div>
    )
}
export default MyClock;
