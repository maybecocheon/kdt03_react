import TailButton from "../component/TailButton"
import TailInput from "../component/TailInput"
import TailCard from "../component/TailCard"
import { useRef, useEffect, useState } from "react"

export default function Gallery() {
  // 새로고침 되면 검색창에 focus 되게 하기
  const kwRef = useRef();

  useEffect(() => {
    kwRef.current.focus();
  }, []);

  // 검색창에 입력된 값 가져오기
  const [word, setWord] = useState();

  const handleClick = () => {
    setWord(encodeURI(kwRef.current.value));
  };

  // card 뿌리기
  const [card, setCard] = useState([]);

  // 관광 사진 url 정보
  const apiKey = import.meta.env.VITE_PUBLIC_API;

  const getFetchData = () => {
    // url은 fetch 할 때마다 바뀌어야 하므로 이 함수 안에 존재해야 함
    const url = `/photo-api/gallerySearchList1?serviceKey=${apiKey}`
                + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${word}&_type=json`;
    if (word != ""){
      fetch(url)
      .then(resp => resp.json())
      .then(data => {
        const items = data.response.body.items.item;
        const infos = items.map((item, i)=> 
                          <TailCard key={i} source={item.galWebImageUrl} title={item.galTitle} subtitle={item.galPhotographyLocation} keyword={item.galSearchKeyword}/>)
        setCard(infos);
      })
      .catch(err => console.log(err));
    }
  }

  useEffect(() => {
    if (word == ""){
      alert("키워드를 입력해 주세요.");
      kwRef.current.focus();
      return;
    }

    getFetchData();
  }, [handleClick])

  // 취소하기
  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col items-center bg-amber-50 p-5 m-5">
        <h1 className="flex m-10 font-extrabold text-4xl">한국관광공사 관광사진 정보 서비스</h1>
        <form className="w-3/4 grid grid-cols-2 gap-2">
          <TailInput type="text" name="txt1" ref={kwRef} />
          <div className="w-full flex gap-2">
            <TailButton color="blue" caption="조회" onHandle={handleClick}/>
            <TailButton color="blue" caption="취소" onHandle={handleCancel}/>
          </div>
        </form>
        </div>
      <div className="w-full h-1/2 p-5 flex justify-center flex-wrap grid-cols-3 gap-4 overflow-y-auto">
        {card}
      </div>
    </div>
  )
}
