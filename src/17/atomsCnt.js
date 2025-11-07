import { atom } from "jotai"

// 전역 변수 설정
export const cntAtom = atom(0);

// get으로 변수값 들고 와서 dbcntAtom 값 설정
export const dbcntAtom = atom(get => get(cntAtom) * 2);