import TailButton from "../component/TailButton"

export default function TrafficNav({title, category, select, setSelect}) {

    return (
          
        <div className="w-full">
            <div className="w-full flex justify-between p-5">
                <p className="w-1/2 font-extrabold text-4xl">{title}</p>
                <div className="w-full flex justify-end gap-4">
                    {/* 선택되었을 때 색을 고정시키기 위해 color에 삼항연산자 쓰는 거임 */}
                    {category.map(item => <TailButton key={item} color={select == item ? "green" : "blue"} caption={item} onHandle={() => setSelect(item)}/>)}
                </div>
            </div>
        </div>
    )
}
