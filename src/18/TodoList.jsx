import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { useAtomValue } from 'jotai'
import { todosAtom, completedAtom, incomletedAtom } from './atomsTodo'

export default function TodoList() {
    // atom으로 전역변수 가지고 오기
    const todos = useAtomValue(todosAtom);
    const completed = useAtomValue(completedAtom);
    const incompleted = useAtomValue(incomletedAtom);

    return (
        <div className="w-full h-full m-10">
            <div className="font-extrabold text-4xl mb-5 text-center">할일목록</div>
            <div className="bg-blue-50 p-5 text-center border-1 border-gray-300 rounded-2xl mb-5">
                전체: {todos.length}개  |  완료: {completed}개  |  미완료: {incompleted}개
            </div>
            <TodoInput />
            {
                todos.map(item => <TodoItem key={item.id} todo={item} />)
            }
        </div>
    )
}
