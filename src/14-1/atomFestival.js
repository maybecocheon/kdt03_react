import { atom } from "jotai"

export const selGuAtom = atom(null);

export const festivalFetchData = atom(async () => {
    const apiKey = import.meta.env.VITE_PUBLIC_API;
    const url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apiKey}&pageNo=1&numOfRows=40&resultType=json`;

    const resp = await fetch(url);
    const data = await resp.json();
    return data.getFestivalKr.item;
})