import TailButton from '../component/TailButton'
import { useSetAtom } from 'jotai'
import { todosAtom } from './atomsTodo';
import { useEffect, useRef, useState } from "react";

export default function TodoItem({ todo }) {
    const setTodos = useSetAtom(todosAtom);

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
        setTodos(prev => prev.filter(item => item.id !== todo.id));
    }

    // 저장 클릭 시 함수
    const onClickStore = () => {
        if (editValue == "") {
            alert("값을 입력해 주세요.");
            editValue.focus();
            return;
        }
        setTodos(prev => prev.map(t => t.id == todo.id ? { ...t, text: editValue } : t));
        setIsEdit(false);
    }

    // 취소 클릭 시 함수
    const onClickCancel = () => {
        setIsEdit(false);
        setEditValue(todo.text);
    }

    // 체크 시
    const onCheckToggle = () => {
        setTodos(prev => prev.map(t => t.id == todo.id ? { ...t, completed: !todo.completed } : t))
    }
    return (
        <div className="flex gap-2 mb-2">
            <div className="flex w-full gap-2 items-center">
                <input type="checkbox" name={todo.id} ref={todoCheckValue} onChange={onCheckToggle} />
                {isEdit ? <input type="text" name={todo.id} value={editValue} ref={editRef} onChange={(e) => setEditValue(e.target.value)} className="p-2" />
                    :
                    <p className={todo.completed ? "line-through" : ""}>{todo.text}</p>}
            </div>
            {isEdit ?
                <div className="flex gap-5 w-4/10">
                    <TailButton color="green" caption="저장" onHandle={onClickStore} />
                    <TailButton color="orange" caption="취소" onHandle={onClickCancel} />
                </div>
                :
                <div className="flex gap-5 w-4/10">
                    <TailButton color="green" caption="수정" onHandle={onClickChange} />
                    <TailButton color="orange" caption="삭제" onHandle={onClickDel} />
                </div>
            }
        </div>
    )
}
