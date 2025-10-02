// function Mydiv3(props2) {
function Mydiv3({dv1, dv2, dv3}) { //구조 분해
  return (
    <div className="w-3/4 h-3/5 bg-green-500 p-10 m-20 text-center">
        {/* <p className="pt-15">{props2.dv1} &gt; {props2.dv2} &gt; {props2.dv3}</p> */}
        <p className="pt-15">{dv1} &gt; {dv2} &gt; {dv3}</p>
    </div>
  );
}

export default Mydiv3;