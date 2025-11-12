import { useRef } from "react";
import TailButton from "../component/TailButton";

export default function TodoInput({ todo, onHandle }) {
    // 추가 클릭 시 함수
    // 인풋 값 참조하기
    const todoInputValue = useRef();
    const onClickAdd = () => {
        if (todoInputValue.current.value == "") {
            alert("값을 입력해 주세요.");
            todoInputValue.current.focus();
            return;
        }
        onHandle([...todo, { id: Date.now(), text: todoInputValue.current.value, completed: false }]);
        todoInputValue.current.value = "";
    }

    return (
        <div className="flex gap-2 mb-5 p-2 items-center w-full">
            <input type="text" name="todoListInput" ref={todoInputValue} placeholder="새로운 할 일을 입력하세요"
                            className="w-9/10 p-3 bg-gray-50 rounded-lg border-1 border-gray-300" />
            <div className="w-2/10">
                <TailButton color="blue" caption="추가" onHandle={onClickAdd} />
            </div>
        </div>
    )
}
