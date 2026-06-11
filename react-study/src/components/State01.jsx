import { useState } from "react";

function State01(){

    let [count, setCount] = useState(0);

    let [num, setNum] = useState(0);

    let cnt = 0;
    return (
        <div>
            <h1>State01</h1>
            <p>{cnt}</p>
            <button onClick={()=>{
                console.log('cnt증가 버튼 클릭');
                cnt++;
                console.log(cnt);
                num++;
                console.log(num);
            }}>cnt증가</button>

            <br></br>

            <p>{count}</p>
            <button onClick={()=>{
                console.log('count증가 버튼 클릭');
                // count++;
                setCount(count+1);
                console.log(count);
            }}>count증가</button>
        </div>
    )
}

export default State01;