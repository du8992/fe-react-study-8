import { useState } from 'react';

function Quiz01(){

    let [count, setCount] = useState(0);
    return(
<div>
<p style={{color : 'red'}}>{count}</p>
            <button onClick={()=>{
                console.log('count증가 버튼 클릭');
                // count++;
                setCount(count+2);
                console.log(count);
            }}>짝수출력</button>

</div>
    );
}

export default Quiz01;