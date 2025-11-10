import { useRef } from "react";
import TailButton from "../component/TailButton";
import { useSetAtom } from 'jotai'
import { todosAtom } from './atomsTodo';

export default function TodoInput() {
    // 추가 클릭 시 함수
    // 인풋 값 참조하기
    const todoInputValue = useRef();
    const setTodo = useSetAtom(todosAtom);
    const onClickAdd = () => {
        if (todoInputValue.current.value == "") {
            alert("값을 입력해 주세요.");
            todoInputValue.current.focus();
            return;
        }
        setTodo(prev => [...prev, { id: Date.now(), text: todoInputValue.current.value, completed: false }]);
        todoInputValue.current.value = "";
    }

    return (
        <div className="flex gap-2 mb-5">
            <input type="text" name="todoListInput" ref={todoInputValue} placeholder="새로운 할 일을 입력하세요" className="w-9/10 p-5" />
            <div className="w-3/10">
                <TailButton color="blue" caption="추가" onHandle={onClickAdd} />
            </div>
        </div>
    )
}
