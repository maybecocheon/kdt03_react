import Mydiv3 from './MyDiv3.jsx';
//부모 컴포넌트에서 만든 속성을 자식에게서 사용하려면 자식 컴포넌트의 매개변수 자리에 넣어 주어야 함 (이때도 이름 지정 가능)
//props는 객체이므로 props.속성명으로 접근
//props={d1: 'div1', d2: 'div2', d3: 'div3'}

//export default function MyDiv2(props) {
export default function MyDiv2({d1, d2, d3}) { //구조 분해
  return (
    <div className='w-4/5 h-3/4 bg-green-700 p-20 pb-10 m-20 ml-30'>
      {/* <p className='pt-5'>{props.d1} &gt; {props.d2}</p> */}
      <p className='pt-5'>{d1} &gt; {d2}</p>
      {/* Mydiv3에서 props 값 가지고 싶다면 또 속성 전달해야 함 */}
      {/* <Mydiv3 dv1={props.d1} dv2={props.d2} dv3={props.d3}/> */}
      <Mydiv3 dv1={d1} dv2={d2} dv3={d3}/>
    </div>
  )
}
