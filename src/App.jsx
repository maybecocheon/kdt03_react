// APP.jsx는 리액트의 진입점
import './App.css'
// import MyClock from './02/MyClock.jsx';
// import MyDiv1 from './03/MyDiv1.jsx';
import MyList from './04/MyList.jsx';

function App() {
  return (
    // h-screen: 화면 전체 높이
    // h-full: 부모 높이 100%
    <div className='w-full h-screen flex flex-col justify-center items-center font-medium'>
      {/* <MyClock/> */}
      {/* <MyDiv1 /> */}
      <MyList/>
    </div>
  )
}

export default App;
