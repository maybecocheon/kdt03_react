import MyDiv2 from './MyDiv2.jsx';

export default function MyDiv1() {
  return (
    <div className='w-2/3 bg-green-900 text-4xl font-bold text-white p-20 m-10'>
        div1
        <MyDiv2 />
    </div>
  )
}
