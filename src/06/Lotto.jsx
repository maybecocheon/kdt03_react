import {useState} from 'react'
import TailBall from '../component/TailBall'
import TailButton from '../component/TailButton'

//클릭했을 때 TailBall 6개 생성 => onHandle에 전달할 함수
let [ball, setBall] = useState(false);

//Lotto 컴포넌트
export default function Lotto() {
    

    const click = () => {

    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex m-10'>
                <TailBall />
                <TailBall />
                <TailBall />
                <TailBall />
                <TailBall />
                <TailBall />
            </div>
            <TailButton color="blue" caption="로또 번호 생성" onHandle={}/>
        </div>
  )
}
