import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav"
import TrafficInfo from "./TrafficInfo"
import trafficData from "./교통사고통계.json"

export default function Accident() {

  // 전체 데이터
  const [tdata, setTdata] = useState([]);

  // 대분류 데이터
  const [c1, setC1] = useState([]);
  const [selectC1, setSelectC1] = useState();

  // 사고유형 데이터
  const [c2, setC2] = useState([]);
  const [selectC2, setSelectC2] = useState();

  // 사고정보 데이터
  const [info, setInfo] = useState([]);

  // 전체 데이터를 tdata에 넣는 함수
  const getFetchData = () => {
    setTdata(trafficData);
  }

  // 컴포넌트 실행했을 때 데이터 불러오기
  useEffect(() => {
    getFetchData();
  }, [])

  // 데이터 불러왔을 때 대분류 불러오기
  useEffect(() => {
    if (tdata.length == 0) return;

    let arr = trafficData.map(item => item["사고유형대분류"]);
    let set = new Set(arr);
    set = Array.from(set);
    setC1(set);
  }, [tdata])

  // 대분류 선택됐을 때 사고유형 불러오기
  useEffect(() => {
    if (c1.length == 0) return;

    setInfo([]);
    let arr2 = trafficData.filter(item => item["사고유형대분류"] == selectC1).map(item => item["사고유형"]);
    let set2 = [...new Set(arr2)];
    setC2(set2);
  }, [selectC1])

  // 사고유형 선택됐을 때 사고정보 데이터 불러오기
  useEffect(() => {
    if (!selectC1 || !selectC2) return;

    let info2 = trafficData.filter(item => item["사고유형대분류"] == selectC1 && item["사고유형"] == selectC2);
    setInfo(info2);
  }, [selectC2])

  return (
    <div className="w-full overflow-y-scroll">
      {c1 && <TrafficNav title="교통사고 대분류" category={c1} select={selectC1} setSelect={setSelectC1} />}
      {c2 && <TrafficNav title={selectC1 != null ? "교통사고 사고유형" : ""} category={c2} select={selectC2} setSelect={setSelectC2} />}
      {info && info.map((item, i) => <TrafficInfo key={i} infoData={item} />)}
    </div>
  )
}
