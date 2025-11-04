import { useEffect } from "react";

export default function TailSelect({ id, title, values}) {

    const optionList = values.map(item => <option key={item} value={item}>{item}</option>);
    
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{title}</label>
            <select id={id}>
                <option value="" disabled>{title} 선택</option>
                {optionList}
            </select>
        </div>
    )
}
