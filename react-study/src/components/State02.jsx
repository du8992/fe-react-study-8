function State02(){
    let numArr = [1, 1, 1, 1];

    // 1. text 대신 처음부터 JSX 배열로 처리 (key 추가)
    let textArr = [];
    for(let i = 1; i <= 5; i++){
        textArr.push(<p key={`text-${i}`}>안녕하세요! test for문</p>);
    }

    let msgArr = ["안녕", "하이", "반가워", "hi"];

    // 2. eleArr에도 고유한 key 추가
    let eleArr = [];
    for(let i = 1; i <= 5; i++){
        eleArr.push(<p key={`ele-${i}`}>안녕하세요! eleArr for문</p>);
    }

    return (
        <div>
            {/* 3. map() 함수 안에도 index를 활용해 key 추가 */}
            {
                numArr.map((item, index) => {
                    return (
                        <p key={`num-${index}`}>안녕하세요! numArr map()</p>
                    )
                })
            }

            <hr />
            {/* 이제 글자로 안 나오고 예쁘게 태그로 렌더링됩니다 */}
            {textArr} 

            <hr />
            {eleArr}

            <hr />
            {/* 4. msgArr map()에도 index를 활용해 key 추가 */}
            {
                msgArr.map((msg, index) => {
                    return (
                        <p key={`msg-${index}`}>인사 : {msg}</p>
                    )
                })
            }

            <hr />
            {/* 여기는 하드코딩된 정적 태그들이라 key가 없어도 무방합니다 */}
            <p>인사 : 인사1</p>
            <p>인사 : 인사2</p>
            <p>인사 : 인사3</p>
            <p>인사 : 인사4</p>
            <p>인사 : 인사5</p>
            
        </div>
    );
}
export default State02;