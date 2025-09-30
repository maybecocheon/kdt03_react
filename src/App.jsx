// APP.jsx는 리액트의 진입점
import './App.css'
import MyClock from './02/MyClock.jsx';

function App() {
  return (
    // h-screen: 화면 전체 높이
    // h-full: 부모 높이 100%
    <div className='w-full h-screen flex flex-col justify-center items-center text-6xl font-bold'>
      <MyClock />
    </div>
  )
}

export default App;
