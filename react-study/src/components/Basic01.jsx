import { useState } from 'react';

function Basic01(){

    let hello1 = "안녕하세요";
    let hello2 = "Hi Hello";

    // 1. 에러 원인 해결: hello3을 let으로 먼저 선언해줍니다.
    let hello3 = ""; 

    if(1 == 1) {
        hello3 = '안녕';
    } else {
        hello3 = '잘가';
    }
    
    // 2. 에러 원인 해결: flag 변수도 선언해줍니다. (우선 true로 설정)
    let flag = true; 
    

    return (
    <div>
        <h1>React Basic01</h1>
        <h2 className="font-red">hello react react</h2>
        <h3>{hello1}</h3>
        <h3>{hello2}</h3>
        
        {/* 위에서 만든 hello3 변수도 화면에 보여주기 */}
        <h3>{hello3}</h3> 

        {
            // flag가 true이면 hello1이 보이고, false이면 hello2가 보입니다.
            flag == true ? <p>{hello1}</p> : <p>{hello2}</p>
        }

        {
            flag == true && <p>{hello2}</p>
        }

        {/* <h2 style={ {color: 'blue' , fontSize'25px'}}></h2> */}
    </div>
    )
}
export default Basic01;