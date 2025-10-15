import MyToggleBox from "./MyToggleBox"

export default function MyToggle() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-8/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <MyToggleBox color2="blue"/>
            <MyToggleBox color2="orange"/>
            <MyToggleBox color2="green"/>
        </div>
    </div>
    
  )
}
