import TailButton from '../component/TailButton'
import { useEffect, useRef, useState } from "react";

export default function TodoItem({ todo, onHandle, localStTodos }) {
    // 로컬 스토리지에서 값 들고 오기
    // const todos = JSON.parse(localStorage.getItem("todo")) || [];

    // 수정 여부를 묻는 state 
    const [isEdit, setIsEdit] = useState(false);

    // 수정 시 state 변수
    const [editValue, setEditValue] = useState(todo.text);
    const editRef = useRef();

    // 수정 클릭 시 함수
    // 체크박스의 값 참조하기
    const todoCheckValue = useRef();
    const onClickChange = () => {
        setIsEdit(true);
    }

    // 수정할 값 focus 하기
    useEffect(() => {
        if (isEdit) {
            editRef.current?.focus();
        }
    }, [isEdit]);

    // 삭제 클릭 시 함수
    const onClickDel = () => {
        onHandle(localStTodos.filter(item => item.id !== todo.id));
    }

    // 저장 클릭 시 함수
    const onClickSave = () => {
        if (editValue == "") {
            alert("값을 입력해 주세요.");
            editValue.focus();
            return;
        }
        onHandle(localStTodos.map(t => t.id == todo.id ? { ...t, text: editValue } : t));
        setIsEdit(false);
    }

    // 취소 클릭 시 함수
    const onClickCancel = () => {
        setIsEdit(false);
        setEditValue(todo.text);
    }

    // 체크 시
    const onCheckToggle = () => {
        const localCheck = localStTodos.map(t => t.id == todo.id ? { ...t, completed: !t.completed } : t);
        // 체크 시 true 값이 아래로 내려가게 하기
        onHandle([...localCheck].sort((a, b) => a.completed - b.completed));
    }

    return (
        <div className="flex gap-5 mb-2">
            <div className="flex w-full gap-5 items-center bg-yellow-50 p-2">
                <input type="checkbox" name={todo.id} ref={todoCheckValue} onChange={onCheckToggle} />
                {isEdit ?
                <input type="text" name={todo.id} value={editValue} ref={editRef} onChange={(e) => setEditValue(e.target.value)} className="p-2 w-full focus: bg-gray-50" />
                    : <p className={todo.completed ? "line-through text-gray-300" : ""}>{todo.text}</p>}
            </div>
            {isEdit ?
                <div className="flex gap-5 w-3/10">
                    <TailButton color="green" caption="저장" onHandle={onClickSave} />
                    <TailButton color="orange" caption="취소" onHandle={onClickCancel} />
                </div>
                :
                <div className="flex gap-5 w-3/10">
                    <TailButton color="green" caption="수정" onHandle={onClickChange} />
                    <TailButton color="orange" caption="삭제" onHandle={onClickDel} />
                </div>
            }
        </div>
    )
}
