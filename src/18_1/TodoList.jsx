import { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

export default function TodoList() {
    // 투두리스트 목록 변수 설정
    const [todos, setTodos] = useState([]);

    // 완료, 미완료 변수 설정하기
    const [completed, setCompleted] = useState(0);
    const [incompleted, setIncompleted] = useState(0);
    
    // 화면 불러와지면 로컬스트리지에서 값 가져오기
    // getItem: 읽어 올 때는 원래 데이터 타입으로 사용해야 함
    const todo = JSON.parse(localStorage.getItem("todo")) || [];
    useEffect(() => {
        setTodos(todo);
    },[])

    // 투두리스트 목록 바뀌면
    useEffect(() => {
        setCompleted(todos.filter(item => item.completed == true).length);
        setIncompleted(todos.filter(item => !item.completed).length);
    },[todos])

    // 로컬 스토리지에 데이터 저장 => setItem 한 것 개발자 도구에서 delete 하면 지울 수 있음
    const handleSave = (newItem) => {
        setTodos(newItem);
        // setItem: 어떤 데이터 타입이든 문자열 형태로 값을 저장해야 함
        localStorage.setItem("todo", JSON.stringify(newItem));
    }

    return (
        <div className="w-full h-full m-10">
            <div className="font-extrabold text-4xl mb-5 text-center">할일목록</div>
            <div className="bg-blue-50 p-5 text-center border-1 border-gray-300 rounded-2xl mb-5 flex justify-center gap-7">
                <div className="bg-blue-100 p-2 rounded-lg w-20 h-20 flex flex-col justify-center"><p>전체:</p><p className="font-extrabold text-xl">{todos.length}개</p></div>
                <div className="bg-blue-100 p-2 rounded-lg w-20 h-20 flex flex-col justify-center"><p>완료:</p><p className="font-extrabold text-xl">{completed}개</p></div>
                <div className="bg-blue-100 p-2 rounded-lg w-20 h-20 flex flex-col justify-center"><p>미완료:</p><p className="font-extrabold text-xl">{incompleted}개</p></div>
            </div>
            <TodoInput todo={todos} onHandle={handleSave} />
            {
                todos.map(item => <TodoItem key={item.id} todo={item} onHandle={handleSave} localStTodos={todo} />)
            }
        </div>
    )
}
