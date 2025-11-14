import TailButton from '../component/TailButton'
import { useEffect, useRef, useState } from "react";

export default function TodoItem({ todo, url, api, getTodos }) {

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
    const onClickDel = async () => {
        const resp = await fetch(
            `${url}/rest/v1/todos?id=eq.${todo.id}`,
            {
                method: 'DELETE',
                headers: {
                    'apiKey': api,
                    'Authorization': `Bearer ${api}`
                }
            }
        )

        if (resp.ok) {
            getTodos();
        } else {
            console.error('Error deleting todo:', resp.statusText)
        }
    }

    // 저장 클릭 시 함수
    const onClickSave = async () => {
        if (editValue == "") {
            alert("값을 입력해 주세요.");
            editValue.focus();
            return;
        }

        const resp = await fetch(
            `${url}/rest/v1/todos?id=eq.${todo.id}`,
            {
                method: 'PATCH',
                headers: {
                    'apiKey': api,
                    'Authorization': `Bearer ${api}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: editRef.current.value })
            }
        )

        if (resp.ok) {
            getTodos();
        } else {
            console.error('Error editing todo:', resp.statusText)
        }
        setIsEdit(false);
    }

    // 취소 클릭 시 함수
    const onClickCancel = () => {
        setIsEdit(false);
        setEditValue(todo.text);
    }

    // 체크 시
    const onCheckToggle = async () => {
        const resp = await fetch(
            `${url}/rest/v1/todos?id=eq.${todo.id}`,
            {
                method: 'PATCH',
                headers: {
                    'apiKey': api,
                    'Authorization': `Bearer ${api}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completed: !todo.completed })
            }
        )

        if (resp.ok) {
            getTodos();
        } else {
            console.error('Error toggling todo:', resp.statusText)
        }
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
                    <TailButton color="red" caption="저장" onHandle={onClickSave} />
                    <TailButton color="orange" caption="취소" onHandle={onClickCancel} />
                </div>
                :
                <div className="flex gap-5 w-3/10">
                    <TailButton color="red" caption="수정" onHandle={onClickChange} />
                    <TailButton color="orange" caption="삭제" onHandle={onClickDel} />
                </div>
            }
        </div>
    )
}
