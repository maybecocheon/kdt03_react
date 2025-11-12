import { atom } from 'jotai'

export const todosAtom = atom([
    {id: "1", text: "리액트 공부", completed: false},
    {id: "2", text: "자바 공부", completed: false}
])

// todo 완료된 개수
export const completedAtom = atom(get => {
    const todos = get(todosAtom);
    return todos.filter(item => item.completed == true).length;    
})

// todo 미완료된 개수
export const incomletedAtom = atom(get => {
    return todos.filter(todo => !todo.completed).length;
})