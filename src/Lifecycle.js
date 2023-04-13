import React,{useEffect,useState} from "react";
const UnMountTest = ()=> {
    useEffect(()=>{
        console.log("Mount");
    return ()=>{
        // UnMount 시점에 실행되게 됨
        console.log("UnMount!!!!!");
    };
    },[]);

    return <div>UnMount Testing Component.</div>
};

const Lifecycle = () => {
    const [isVisible,setIsVisible] = useState(false);
    const toggle = ()=>setIsVisible(!isVisible);
   
/*
    const [count,setCount] = useState(0);
    const [text,setText] = useState("");
    
    useEffect(()=>{
        console.log("Mount")
    },[]);

    useEffect(()=>{
        console.log("Update")
    });

    useEffect(()=>{
        console.log(`Count is update : ${count}`);
        if(count>5){
            alert("Count가 5를 초과했습니다. 따라서 1로 초기화 합니다.");
            setCount(1);
        }
    },[count]);

    useEffect(()=>{
        console.log(`Text is update : ${text}`)
    },[text]);
*/
   return <div style={{padding: 20}}>
        <button onClick={toggle}>On/Off</button>
        {isVisible && <UnMountTest/>}
      {/*  <div>
            {count}
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div> */}
        
    </div>
}

export default Lifecycle;