export default function Header() {
  return (
    <header className='bg-blue-400 text-white w-full h-30 flex items-center px-10'>
            <nav className='container mx-auto flex justify-between'>
              <h1 className='font-extrabold text-4xl'>KDT React</h1>
              {/* space-x => 요소 사이의 공간을 제어 */}
              <ul className='flex justify-between items-end space-x-4'>
                <li className='font-extrabold hover:cursor-pointer'>Home</li>
                <li className='font-bold hover:cursor-pointer'>로또</li>
                <li className='font-bold hover:cursor-pointer'>일일박스오피스</li>
              </ul>
            </nav>
    </header>
  )
}
