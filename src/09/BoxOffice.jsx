import { useState, useEffect } from 'react';

export default function BoxOffice() {

    const apiKey = import.meta.env.VITE_MV_API;
    const baseUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"

    //targetDt 기본값은 어제 날짜
    const yesterday = (new Date().toLocaleDateString().replaceAll(". ", "").replaceAll(".", "") - 1).toString();
    const baseYesterday = yesterday.substring(0, 4) + "-" + yesterday.substring(4, 6) + "-" + yesterday.substring(6, 8);

    //날짜 값에 따라 url 값 변경하기
    const [dt, setDt] = useState(yesterday);

    const onHandleInput = (e) => {
        const dtInput = e.target.value.replaceAll("-", "");
        setDt(dtInput);
    }

    //테이블에 들어갈 값 변경하기
    const [tag, setTag] = useState([]);

    const getFetchData = () => {
        let url = `${baseUrl}key=${apiKey}&targetDt=${dt}`

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            let boxs = data.boxOfficeResult.dailyBoxOfficeList;
            let tags = boxs.map((item, i) => 
                <tr className='text-center border-b-1 border-gray-300 hover:cursor-pointer' key={i} onClick={() => onHandleClick(item)}>
                    <td className='p-3 font-bold'>{item.rank}</td>
                    <td className='p-3'>{item.movieNm}</td>
                    <td className='p-3 text-right'>{parseInt(item.salesAmt).toLocaleString()}</td>
                    <td className='p-3 text-right'>{parseInt(item.audiCnt).toLocaleString()}</td>
                    <td className='p-3 text-right'>{parseInt(item.salesAcc).toLocaleString()}</td>
                    <td className='p-3 text-right'>{parseInt(item.audiAcc).toLocaleString()}</td>
                    <td className='p-3'>{item.rankInten > 0 ? <span className='text-red-500'>▲ {item.rankInten}</span>
                                                                : item.rankInten == 0 ? '-' 
                                                                : <span className='text-blue-800'>▼ {item.rankInten.replaceAll("-", "")}</span>}</td>
                </tr>
            )
            setTag(tags);
        })
        .catch(err => console.log(err))
    }

    // 클릭 시 나타나는 정보
    const [info, setInfo] = useState('');

    const onHandleClick = (mv) => {
        const information = "[" + mv.rankOldAndNew + ": " + mv.openDt + "]" + " " + mv.movieNm + ", 상영한 스크린 수: " + mv.scrnCnt + ", 상영횟수: " + mv.showCnt;
        setInfo(information);
    }

    // 날짜(dt) 변경될 때마다 1)데이터 새로 불러오기 2)정보값 초기화
    useEffect(() => {
        getFetchData();
        setInfo('');
    }, [dt]);

    return (
        <div className='w-8/10'>
            <h1 className='font-extrabold text-3xl text-center'>일일박스 오피스</h1>
            <div className='flex flex-col items-end'>
            <p>📅기준날짜: &nbsp;
                <input type='date' id='choiceDate' onChange={onHandleInput} max={baseYesterday}/>
            </p>
            <table className='w-full m-3'>
                <thead>
                    <tr className='border-b-2 bg-gray-100'>
                        <th className='p-3'>순위</th>
                        <th className='p-3'>영화명</th>
                        <th className='p-3'>매출액</th>
                        <th className='p-3'>관객수</th>
                        <th className='p-3'>누적 매출액</th>
                        <th className='p-3'>누적 관객수</th>
                        <th className='p-3'>증감률</th>
                    </tr>
                </thead>
                <tbody className='text-gray-700'>
                    {tag}
                    <tr>
                        <td colSpan='7' className='text-center bg-gray-100 p-3 font-bold text-black'>{info}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        
    )
}
