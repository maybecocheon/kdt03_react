import clock from './clock.png'; // public이라는 루트 폴더에서 불러 온다면 / 뒤에 바로 씀

function MyClockImage() {
  return (
    <div>
        <img src={clock} alt="시계" className='w-100 h-100 rounded-lg'/>
        {/* 화면 사이즈에 맞추려면 w와 h 속성값 분수로 쓰면 됨 */}
        {/* 중괄호는 표현식 */}
    </div>
  )
}
export default MyClockImage;