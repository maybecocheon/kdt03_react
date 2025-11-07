import TailButton from "../component/TailButton";
import { useAtom } from "jotai"
import { cntAtom } from "./atomsCnt.js"

export default function JotaiBt() {
    const [cnt, setCnt] = useAtom(cntAtom);

    return (
        <div className="flex gap-2">
            <TailButton color="blue" caption="증가" onHandle={() => setCnt(cnt + 1)}/>
            <TailButton color="orange" caption="감소" onHandle={() => setCnt(cnt - 1)}/>
        </div>
    )
}
