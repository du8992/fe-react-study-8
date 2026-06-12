import React from 'react';

// function Box(props) { // 1. 부모가 보낸 택배 묶음(props)을 받아서
//     return (
//         <div style={{ backgroundColor: 'lightgreen' }}>
//             {/* 2. 부모가 보낸 이름 그대로 props.text / props.detail 로 꺼냅니다. */}
//             <h1>{props.text}</h1>
//             <p>{props.detail}</p>
//         </div>
//     );
// }

// export default Box;



function Box({text, detail}) { // 1. 부모가 보낸 택배 묶음(props)을 받아서
    return (
        <div style={{ backgroundColor: 'lightgreen' }}>
            {}
            <h1>{text}</h1>
            <p>{detail}</p>
        </div>
    );
}

export default Box;