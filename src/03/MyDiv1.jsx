import MyDiv2 from './MyDiv2.jsx';

export default function MyDiv1() {
  //props
  //부모의 변수를 자식에게 전달 가능
  const d1 = 'div1';
  const d2 = 'div2';
  const d3 = 'div3';

  return (
    //미디어 쿼리를 따로 쓰지 않아도 됨
    //md: 브라우저창이 md(768px) 이상일 때 적용
    //w-350: width: 350px
    //h-200: height: 200px
    <div className='w-full md:w-350 h-200 bg-green-900 text-4xl text-white p-20 m-20'>
        {d1}
        {/*
        컴포넌트 태그에도 속성 사용할 수 있음
        내가 속성명을 만들어서 지정함 (<MyDiv2 a={d1} b={d2}/> => 이것도 가능하다는 뜻)
        이 속성을 자식에게서 사용하려면 자식 컴포넌트의 매개변수 자리에 넣어 주어야 함 (이때도 이름 지정 가능)
        */}
        <MyDiv2 d1={d1} d2={d2} d3={d3}/>
    </div>
  )
}
