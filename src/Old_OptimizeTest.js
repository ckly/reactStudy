import React, { useEffect, useState } from "react";

/*
 * CountView 컴포넌트와 TextView 컴포넌트의 값이 변경 될때 
 * 변경 되는 컴포넌트만 업데이트 하도록 하는 예제.
 * React.memo를 사용한다. => 강화된 컴포넌트가 된다.
 * 컴포넌트의 재사용.
 */
const CountView = React.memo(({count})=>{    
    useEffect(()=>{       //업데이트 될때마다 로그 출력
        console.log(`Update :: Count : ${count}`);
    });
    return <div>{count}</div>
});

const TextView = React.memo(({text})=>{    
    useEffect(()=>{       //업데이트 될때마다 로그 출력
        console.log(`Update :: Text : ${text}`);
    });
    return <div>{text}</div>
});

const OptimizeTest = ()=>{

    const [count, setCount] = useState(1);
    const [text,  setText ] = useState(""); 

    return <div style={{padding:50}}>
        <div>
            <h2>Count</h2>
            <CountView count={count}/>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <div>
            <h2>Text</h2>
            <TextView text={text}/>
            <input onChange={(e)=>setText(e.target.value)}></input>
        </div>
    </div>
}

export default OptimizeTest;