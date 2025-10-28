import { useEffect } from "react"
import bank from '../assets/bank.png'

export default function TailCard() {

  return (
    <div className="border-3 border-amber-500 rounded-md">
      <img src={bank} className="rounded-md"/>
      <div className="p-5">
        <p className="font-extrabold text-xl">제목</p>
        <p>설명</p>
      </div>
    </div>
  )
}


