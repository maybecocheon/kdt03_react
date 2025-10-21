import { useState } from "react";
import { useEffect } from "react";

function MyClockTime() {
    // State 변수
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // setInterval 실행된 후 시간이 변경되어야 하니까 setTime을 콜백 형식으로 호출함
        let timerId = setInterval(() => {setTime(new Date())}, 1000);

        // 화면에서 MyClockTime 컴포넌트 사라지면 clearInterval 실행됨
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="flex flex-col items-center
                        w-100 h-40 bg-amber-400
                        p-3
                        text-3xl leading-15 text-center">
            🐻 현재시각은?
            <div className='w-80 text-amber-800 font-extrabold bg-amber-100'>{time.toLocaleTimeString()}</div>
        </div>
  )
}

export default MyClockTime;