export default function TailCard({source, title, address, keyword}) {

  // 키워드 분리해서 해시태그로 넣기
  let keywords;
  if (keyword.includes(",")){
    keywords = keyword.split(", ").map((item, i)=><p key={i} className="p-2 rounded-full bg-gray-300">{item}</p>);
    if (keywords.length > 5){
      keywords = keywords.slice(0, 4);
    }
  }

  return (
    <div className="rounded-lg w-1/4 h-100 shadow-md  overflow-hidden">
      <img src={source} className="rounded-lg h-6/11 w-full object-cover"/>
      <div className="p-4">
        <p className="font-extrabold text-xl text-gray-900">{title}</p>
        <p>{address}</p>
        <div className="w-full h-1/2 mt-5 mb-2 flex items-end flex-wrap gap-2 text-xs text-gray-900">
          {keywords}
        </div>
      </div>
    </div>
  )
}


