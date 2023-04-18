import React, { useEffect, useState } from "react";

const CountA = React.memo(({count})=>{
    useEffect(()=>{
        console.log(`Update :: Count A : ${count}`);
    });
    return <div>{count}</div>
});

const CountB = ({obj})=>{
    useEffect(()=>{
        console.log(`Update :: Count B : ${obj.count}`)
    });
    return <div>{obj.count}</div>
};

const areEqual = (preProps,nextProps)=>{
    return preProps.obj.count === nextProps.obj.count;
}

const MemoizedCounterB = React.memo(CountB,areEqual);

const OptimizeTest = ()=>{
    const [count, setCount]=useState(1);
    const [obj, setObj] = useState({count : 1,});
    return (
        <div style={{padding:50}}>
            <div>
                <h2>Counter A</h2>
                <CountA count={count}/>
                <button onClick={()=>setCount(count)}>A Button</button>
            </div>
            <div>
                <h2>Counter B</h2>
                <MemoizedCounterB obj={obj}/>
                <button onClick={()=>setObj({count : obj.count})}>B Button</button>
            </div>
        </div>
    )
}

export default OptimizeTest;