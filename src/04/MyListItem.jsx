//1. useState 훅 사용 시 임포트
//중괄호 필수
import { use, useState } from "react";

export default function MyListItem({title, imgUrl, content}) {
    //2. useState 선언
    //useState는 값 두 개를 배열로 반환함 => 1) 현재 상태 값, 2) 상태를 업데이트하는 함수
    const [scnt, setScnt] = useState(0); //초기값 0 설정
    const [dcnt, setDcnt] = useState(0);

    // 클릭했을 때 좋아요 숫자 증가하는 함수 생성
    // 3. scnt의 값 증가시키기
    // scnt는 setScnt() 함수 없이는 값 변화 못 시킴
    const handleClickscnt = () => {
        console.log(`${title} click`, scnt);
        return setScnt(scnt + 1); //scnt 값 1 증가
    }

    //클릭했을 때 싫어요 숫자 증가하는 함수 생성
    const handleClickdcnt = () => {
        console.log(`${title} click`, dcnt);
        return setDcnt(dcnt - 1); //dcnt 값 1 증가
    }

    return (
        <div className='border-2 border-solid border-gray-300
                    flex justify-start items-start
                    w-full text-xl'>
        <img src={imgUrl} alt={title}></img>
        <div className='p-8 w-full h-full flex flex-col justify-between'>
            <div className='mb-8'>
                <h1 className='font-extrabold text-blue-950 text-4xl mb-5'>{title}</h1>
                <div className='text-gray-500'>{content}</div>
            </div>
            <div className='w-full flex justify-between font-bold'>
                <div className='cursor-pointer hover:bg-gray-200 hover:text-red-600' onClick={handleClickscnt}> {/* 이벤트 발생 */}
                {/* useState라는 훅을 써서 화면을 동적으로 변화시켜야 함 */}
                ❤ 좋아요 {scnt}
                </div>
                <div className='cursor-pointer hover:bg-gray-200 hover:text-red-600' onClick={handleClickdcnt}> {/* 이벤트 발생 */}
                {/* useState라는 훅을 써서 화면을 동적으로 변화시켜야 함 */}
                😖 싫어요 {dcnt}
                </div>
            </div>
        </div>
    </div>
  )
}