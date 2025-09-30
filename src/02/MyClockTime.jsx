function MyClockTime() {
    return (
        <div className="flex flex-col items-center
                        w-100 h-40 bg-amber-400
                        p-3
                        text-3xl leading-15 text-center">
            🐻 현재시각은?
            <div className='w-80 text-amber-800 font-extrabold bg-amber-100'>{new Date().toLocaleTimeString()}</div>
        </div>
  )
}

export default MyClockTime;