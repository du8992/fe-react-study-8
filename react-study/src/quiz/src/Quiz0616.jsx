import React, { useState } from 'react';

function Quiz0616() {
    // 💡 useState의 초기값으로 빨, 파, 초, 검 박스 객체를 미리 배열에 넣어둡니다.
    const [boxes, setBoxes] = useState([
        { id: 'init-red', color: 'red' },
        { id: 'init-blue', color: 'blue' },
        { id: 'init-green', color: 'green' },
        { id: 'init-black', color: 'black' }
    ]);

    // 1. 앞에 박스를 추가하는 함수
    const addBoxToFront = (color) => {
        const newBox = {
            id: Date.now() + Math.random(),
            color: color
        };
        setBoxes([newBox, ...boxes]);
    };

    // 2. 뒤에 박스를 추가하는 함수
    const addBoxToBack = (color) => {
        const newBox = {
            id: Date.now() + Math.random(),
            color: color
        };
        setBoxes([...boxes, newBox]);
    };

    return (
        <div style={{ padding: '20px' }}>
            {/* 앞에 추가하는 버튼들 */}
            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => addBoxToFront('red')}>앞빨간박스추가</button>
                <button onClick={() => addBoxToFront('blue')}>앞파란박스추가</button>
                <button onClick={() => addBoxToFront('green')}>앞초록박스추가</button>
            </div>

            {/* 뒤에 추가하는 버튼들 */}
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => addBoxToBack('red')}>뒤빨간박스추가</button>
                <button onClick={() => addBoxToBack('blue')}>뒤파란박스추가</button>
                <button onClick={() => addBoxToBack('green')}>뒤초록박스추가</button>
            </div>
            
            {/* 박스들이 나열될 컨테이너 */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {boxes.map((box) => (
                    <div
                        key={box.id}
                        style={{
                            width: '100px',
                            height: '100px',
                            border: '1px solid black',
                            backgroundColor: box.color,
                            marginLeft: '-1px', 
                            flexShrink: 0
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Quiz0616;