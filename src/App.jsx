// APP.jsx는 리액트의 진입점
import './App.css'
import MyDiv1 from './03/MyDiv1.jsx';

function App() {
  return (
    // h-screen: 화면 전체 높이
    // h-full: 부모 높이 100%
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <MyDiv1 />
    </div>
  )
}

export default App;
