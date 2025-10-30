// APP.jsx는 리액트의 진입점
import './App.css'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
// import MyClock from './02/MyClock.jsx'
// import MyDiv1 from './03/MyDiv1.jsx'
// import MyList from './04/MyList.jsx'
// import MyToggle from './05/MyToggle.jsx'
// import Lotto from './06/Lotto.jsx'
// import FoodMain from './07/FoodMain.jsx'
// import MyEffect from './08/MyEffect.jsx'
// import BoxOffice from './09/BoxOffice.jsx'
// import Traffic from './10/Traffic.jsx'
// import MyRef from './11/MyRef.jsx'
// import RefCal from './12/RefCal.jsx'
// import Gallery from './13/Gallery.jsx'
import Festival from './14/Festival.jsx'

function App() {
  return (
    // h-screen: 화면 전체 높이
    // h-full: 부모 높이 100%
    // overflow-y-hidden: 세로 스크롤바 숨김
    <div className='w-full h-screen flex flex-col justify-center items-center overflow-y-hidden'>
      <Header/>
      <main className='h-1/4 container mx-auto flex flex-col flex-grow justify-center items-center'>
        <Festival/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
