import {useState} from 'react'
import TailButton from '../component/TailButton.jsx'

const boxStyle = {
    blue: {
        on: "bg-blue-50", 
        off: "bg-blue-100"
    },
    orange: {
        on: "bg-orange-50",
        off: "bg-orange-100"
    },
    green: {
        on: "bg-green-50",
        off: "bg-green-100"
    }
}

export default function MyToggleBox({color2}) {
    //isActive 상태: true(ON), false(OFF)
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(prev => !prev)
    }

    //props는 부모 노드에서 자식 노드로만 전달 가능
    const box = boxStyle[color2];

    return (
        <div className={`w-full h-60 rounded-xl flex flex-col justify-center items-center ${isActive ? box.on : box.off}`}>
            <h1 className='m-5 font-bold text-xl'>
                {color2} 토글 박스
            </h1>
            <p className='m-5 text-sm'>
                현재 상태: <span className={`${isActive ? "text-red-800 font-extrabold" : "text-black"}`}>{isActive ? "ON" : "OFF"}</span>
            </p>
            <TailButton color={color2} caption={color2} onHandle={handleClick}/>
        </div>
    )
}
