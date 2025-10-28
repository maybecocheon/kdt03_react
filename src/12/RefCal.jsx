import TailButton from "../component/TailButton"
import { useRef, useEffect } from "react"

export default function RefCal() {

    // input 요소 ref 연결
    const txt1Ref = useRef();
    const txt2Ref = useRef();
    const txt3Ref = useRef();
    const opRef = useRef();

    // 컴포넌트 생성될 때
    useEffect(() => {
        txt1Ref.current.focus();
    }, [])

    // 버튼 눌러지면
    const handleClick = (e) => {
        // 자기 자신으로 submit 되지 않도록 막음
        e.preventDefault();
        
        // ref 변수 안 만들어지면?
        // => ?? 연산자로 인해 undefined인 value 대신 "" 반환
        let num1 = txt1Ref.current?.value ?? "";
        let num2 = txt2Ref.current?.value ?? "";
        let op = opRef.current?.value ?? "+"
        let num3 = txt2Ref.current?.value ?? "";

        switch (op) {
            case "+":
                num3 = Number(num1) + Number(num2);
                break;
            case "-":
                num3 = Number(num1) - Number(num2);
                break;
            case "*":
                num3 = Number(num1) * Number(num2);
                break;
            case "/":
                Number(num2) == 0? num3 = "오류" : num3 = Number(num1) / Number(num2);
                break;
        }
        txt3Ref.current.value = num3;
    }

    // 첫번째 input에 포커스 놓이면
    const handleTxt1 = () => {
        txt1Ref.current.value = "";
        txt2Ref.current.value = "";
        txt3Ref.current.value = "";
        opRef.current.value = "+";
    }

    return (
        <div className="w-full h-full flex justify-center items-start m-10">
            <form className="w-9/10 h-2/10 flex justify-center bg-gray-200 p-10 gap-4">
                <input type="number" name="txt1"
                        ref={txt1Ref} onFocus={handleTxt1}
                        className="p-2 bg-white rounded-md focus:outline-blue-500" />
                <select ref={opRef} className="p-3 bg-white rounded-md">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="number" name="txt2" ref={txt2Ref} className="p-2 bg-white rounded-md focus:outline-blue-500" />
                <TailButton color="blue" caption="=" onHandle={handleClick}/>
                <input type="text" name="txt3" readOnly ref={txt3Ref} className="p-2 bg-white rounded-md focus:outline-blue-500" />
            </form>
        </div>
    )
}
