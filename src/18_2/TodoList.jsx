import { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

export default function TodoList() {
    // 투두리스트 목록 변수 설정
    const [todos, setTodos] = useState([]);

    // 완료, 미완료 변수 설정하기
    const [completed, setCompleted] = useState(0);
    const [incompleted, setIncompleted] = useState(0);

    // supabase url과 api key
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseApi = import.meta.env.VITE_SUPABASE_API;
    
    // 화면 불러와지면 supabase에서 값 가져오기
    const getTodos = async () => {
        const resp = await fetch(
            `${supabaseUrl}/rest/v1/todos?select=*&order=completed`,
            {   
                method: 'GET',
                headers: {
                    'apiKey': supabaseApi,
                    'Authorization': `Bearer ${supabaseApi}`
                }
            })

        if (resp.ok){
            const data = await resp.json();
            setTodos(data);
        } else {
            console.error('Error fetching todos:', resp.statusText);
            setTodos([]);
        }
    }

    useEffect(() => {
        getTodos();
    },[])

    // 투두리스트 목록 바뀌면
    useEffect(() => {
        setCompleted(todos.filter(item => item.completed == true).length);
        setIncompleted(todos.filter(item => !item.completed).length);
    },[todos])
    
    return (
        <div className="w-9/10 h-full m-10">
            <div className="font-extrabold text-4xl mb-5 text-center">할일목록(Supabase Fetch함수)</div>
            <div className="bg-blue-50 p-5 text-center border-1 border-gray-300 rounded-2xl mb-5 flex justify-center gap-7">
                <div className="bg-blue-100 p-2 rounded-lg w-20 h-20 flex flex-col justify-center"><p>전체:</p><p className="font-extrabold text-xl">{todos.length}개</p></div>
                <div className="bg-blue-100 p-2 rounded-lg w-20 h-20 flex flex-col justify-center"><p>완료:</p><p className="font-extrabold text-xl">{completed}개</p></div>
                <div className="bg-blue-100 p-2 rounded-lg w-20 h-20 flex flex-col justify-center"><p>미완료:</p><p className="font-extrabold text-xl">{incompleted}개</p></div>
            </div>
            <TodoInput getTodos={getTodos} url={supabaseUrl} api={supabaseApi} />
            {
                todos.map(item => <TodoItem key={item.id} todo={item} getTodos={getTodos} url={supabaseUrl} api={supabaseApi} />)
            }
        </div>
    )
}
