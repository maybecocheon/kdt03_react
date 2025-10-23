import Tailbutton from '../component/TailButton.jsx'
import { useState, useRef } from 'react' 

export default function MyRef() {
    // 일반 컴포넌트 클릭 시 화면 안 바뀜
    let cnt = 0;
    const handleCnt = () => {
        cnt = cnt + 1;
        console.log('컴포넌트', cnt);
    }

    // state 변수 사용
    const [scnt, setScnt] = useState(0);
    const handleScnt = () => {
        setScnt(prev => prev + 1);
        console.log('state 변수', scnt);
    }

    // ref 변수 사용
    // 본인이 재렌더링 x, 다른 누구에 의해 렌더링될 때 바뀐 값이 화면에 보임
    const rcnt = useRef(0);
    const handleRcnt = () => {
        rcnt.current = rcnt.current + 1;
        console.log('ref 변수', rcnt);
    }


    return (
        <div className='flex flex-col gap-10 font-bold text-2xl'>
            <div className='flex gap-5'>
                <div className='flex gap-1 text-red-700'>
                <div>일반 컴포넌트 변수: </div>
                <div>{cnt}</div>
            </div>
            <div className='flex gap-1 text-blue-700'>
                <div>state 변수: </div>
                <div>{scnt}</div>
            </div>
            <div className='flex gap-1 text-green-700'>
                <div>ref 변수: </div>
                <div>{rcnt.current}</div>
            </div>
            </div>
            <div className='flex gap-5 font-bold text-2xl'>
                <Tailbutton color='blue' caption='컴포넌트 변수' onHandle={handleCnt}/>
                <Tailbutton color='blue' caption='state 변수' onHandle={handleScnt}/>
                <Tailbutton color='blue' caption='ref 변수' onHandle={handleRcnt}/>
            </div>
        </div>
    )
}
