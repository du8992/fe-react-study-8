
import React, { useState } from 'react';

function State03() {
    // 1. 일반 변수로 선언된 배열
    // let arr = [1, 2, 3, 4, 5];

    let [arr, setArr] = useState( [1,2,3,4,5]);

    return (
        <div>
            {/* 버튼을 누르면 콘솔창에 [1, 2, 3, 4, 5, 6]이 정상 출력됩니다. */}
            <button onClick={() => {

                //배열에 값 추가 : push unshift splice
                // [1,2,3,4,5];

                // arr.push();
                // console.log(arr);

                // arr.push(7);
                // setArr(arr);    //화면 재렌더링 발생X
                // arr.push(6);
                // console.log("현재 배열 상태:", arr);

                // setArr( [1,2,3,4,5,7]);

                let temp = [...arr];
                temp.push(7);
                setArr(temp);
            }}>
                배열변경버튼
            </button>

            {/* 2. map 함수에 idx를 추가하고 key={idx}를 넣어 오류를 해결한 부분 */}
            {
                arr.map((val, idx) => {
                    return <p key={idx}>{val}</p>;
                })
            }
        </div>
    );
}

export default State03;