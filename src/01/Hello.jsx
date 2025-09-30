function Hello() {
    let name = "이현지";
    return (
        // Tailwindcss 설치: className 태그 이용해 css 활용 가능 => css와 중복 적용 가능
        <div className="text-center leading-18 border-solid border-4 border-blue-200 rounded-lg p-10">
            {/* <div style={{color: "blue"}}> 스타일 속성 쓰려면 중괄호 안에 값을 넣어야 함 */}
            Hello React~! {/* {name != ''? name : '❤'} => if문 못 쓰고 삼항연산자 써야 함*/}
            <br></br>
            {`${name} 님 안녕하세요🙇‍♀️`} {/* 백틱 사용 가능 */}
            {/* CurrentTime 컴포넌트 여기서 써도 됨 */}
        </div>
    )
}
export default Hello;