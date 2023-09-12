import React, { useState } from 'react';

function useStateClone(num){
  function setCount(value){
    num = value ;
    console.log(num)
  }
  return [num, setCount]
}

function setCount3(num){
  console.log(num);
  document.getElementById('count3').innerText = num
  return num;
}

const UseStateCounter = () => {
  let [count , setCount] = useStateClone(0);
  
  const [count2, setCount2] = useState(0);

  let count3=0 ;

  return (
    <div>
      <h2>Counter : {count}</h2>
      <h2>Counter2 : {count2}</h2>
      <h2>Counter3 : <span id="count3">{count3}</span></h2>
      
      <button onClick={()=> setCount(count+1) }>Increase Counter</button>

      <button onClick={ ()=>setCount2(count2 + 1) }>Increase Counter2</button>

      <button onClick={()=>{
        count3 = setCount3(count3+1) 
      }}>Increase Counter3</button>
    
    </div>
  );
};

export default UseStateCounter;