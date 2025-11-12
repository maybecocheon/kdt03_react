// APP.jsx는 리액트의 진입점
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import MyClock from './02/MyClock.jsx'
// import MyDiv1 from './03/MyDiv1.jsx'
// import MyList from './04/MyList.jsx'
// import MyToggle from './05/MyToggle.jsx'
import Lotto from './06/Lotto.jsx'
// import FoodMain from './07/FoodMain.jsx'
// import MyEffect from './08/MyEffect.jsx'
import BoxOffice from './09/BoxOffice.jsx'
// import Traffic from './10/Traffic.jsx'
// import MyRef from './11/MyRef.jsx'
// import RefCal from './12/RefCal.jsx'
import Gallery from './13/Gallery.jsx'
//import Festival from './14/Festival.jsx'
//import FestivalContents from './14/FestivalContents.jsx'
import Festival from './14_1/Festival2.jsx'
import FestivalContents from './14_1/FestivalContents2.jsx'
// import RouteMain from './15/RouteMain.jsx'
import ChargeInfo from './16/ChargeInfo.jsx'
import ChargerDetail from './16/ChargerDetail.jsx'
// import JotaiCnt from './17/JotaiCnt.jsx'
import TodoList from './18_1/TodoList.jsx'

function App() {
  return (
    // h-screen: 화면 전체 높이
    // h-full: 부모 높이 100%
    // overflow-y-hidden: 세로 스크롤바 숨김
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col justify-center items-center overflow-y-hidden'>
        <Header />
        <main className='h-full w-full container mx-auto flex flex-col flex-grow justify-center items-center overflow-y-auto'>
          <Routes>
            <Route path="/" element={<MyClock />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/boxoffice" element={<BoxOffice />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/festival/contents" element={<FestivalContents />} />
            <Route path="/chargeInfo" element={<ChargeInfo />} />
            <Route path="/chargeDetail" element={<ChargerDetail />} />
            <Route path="/todolist" element={<TodoList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
