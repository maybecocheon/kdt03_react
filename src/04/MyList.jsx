import MyListItem from "./MyListItem"
import MyListData from "./MyListData.json"

// const title = "HTML";
// const imgUrl = "./img/html.png"; 
// const content = "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"

export default function MyList() { 
    //map() 함수: 배열의 각 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
    const tags = MyListData.map(data => <MyListItem
                                        key={data.title} //key는 리액트에서 배열을 렌더링할 때 각 요소를 고유하게 식별하기 위해 필요, 주로 id나 고유한 값을 사용
                                        title={data.title} imgUrl={data.imgUrl} content={data.content}/>); 
   
    return (
    //grid로 나누면 나눈 칸 사이에 마진이 자동 적용됨
    <div className="w-8/10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {tags}
        {/* map 함수 안 쓰면 여기에 컴포넌트 4개 따로 호출하고 props도 다 각각 책정해서 다르게 줘야 함*/}
    </div>
  )
}