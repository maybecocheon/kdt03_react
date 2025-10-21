import { useState } from 'react'; //변수처럼 쓰는 훅
import { useEffect } from 'react'; //함수처럼 쓰는 훅
import TailButton from "../component/TailButton"

export default function MyEffect() {
  const [isActive, setIsActive] = useState(false);
  const [tag, setTag] = useState();

  const handleClick = () => {
    setIsActive(!isActive);
    if (isActive) {
        setTag(<h1>상태 on</h1>);
    } else {
        setTag(<h1>상태 off</h1>);
    }
    console.log("handleClick", isActive);
  }

  const handleShow = () => {
    if (isActive) {
        setTag(<h1>상태 on</h1>);
    } else {
        setTag(<h1>상태 off</h1>);
    }
  }
  
  // 내가 부르지 않아도 실행 시점만 정해 두면 자동 실행되는 함수
  // 배열(변수)의 값에 따라 실행이 됨 => 디펜더시 array
  // 1. 배열 비어 있으면 컴포넌트 생성 시 한 번 실행
  useEffect(() => {
    console.log("컴포넌트 생성");
  }, []);
  
  // 2. useState 변수 값 변경될 때(쉼표로 연결해서 여러 개 들어갈 수 있음)
  useEffect(() => {
    console.log("useEffect", isActive);
  }, [isActive]);

  // 3. 상태가 변경될 때마다 (특정 State 아니고 그냥 상태가 변경되기만 하면)
  useEffect(() => {
    console.log("useEffect 상태가 변경될 때", isActive);
  });

  return (
    <div>
      {isActive? <TailButton color="blue" caption="useEffect" onHandle={handleClick}/> 
                : <TailButton color="orange" caption="useEffect" onHandle={handleClick}/>}
      <TailButton color="green" caption="태그 변경" onHandle={handleShow}/>
      {tag}
    </div>
  )
}
