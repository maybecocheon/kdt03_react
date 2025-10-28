import TailButton from "../component/TailButton"
import TailInput from "../component/TailInput"
import TailCard from "../component/TailCard"
import { useRef, useEffect } from "react"

export default function Gallery() {
  const kwRef = useRef();

  useEffect(() => {
    kwRef.current.focus();
  }, []);

  // 관광 사진 url 정보
  const apiKey = import.meta.env.VITE_PUBLIC_API;
  const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${apiKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%84%9C%EC%9A%B8%20%EC%95%BC%EA%B2%BD%20%EC%B6%95%EC%A0%9C&_type=json`;

  // const getFetchData = async () => {
  //   const resp = await fetch(url);
  //   console.log(url);
  //   const data = await resp.json();
  //   console.log(data);
  // }

  // useEffect(() => {
  //   getFetchData();
  // }, [])

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center bg-amber-50 p-5 m-5">
        <h1 className="flex m-10 font-extrabold text-4xl">한국관광공사 관광사진 정보 서비스</h1>
        <form className="w-3/4 grid grid-cols-2 gap-2">
          <TailInput type="text" name="txt1" ref={kwRef}/>
          <div className="w-full flex gap-2">
            <TailButton color="blue" caption="조회" onHandle={()=>{}}/>
            <TailButton color="blue" caption="취소" onHandle={()=>{}}/>
          </div>
        </form>
        </div>
      <div className="w-full flex justify-center">
        <TailCard />
      </div>
    </div>
  )
}
