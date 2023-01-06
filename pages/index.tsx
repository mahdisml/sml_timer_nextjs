import { useState , useEffect } from 'react';

export default function Home() {
  const [state, setState] = useState(0);
  const [main, setMain] = useState(0.0);
  const [secondary, setSecondary] = useState(0.0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state == 1){
        setMain(main + 0.0166666666667)
      }
      if (state == 2){
        setSecondary(secondary + 0.0166666666667)
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  function setStates (a:number){
    setState(a)
  }
  function getSituation(a:number){
    switch(a){
      case 1: {
        if (state === 1){return true}else {return false}
      }
      case 2: {
        if (state === 2){return true}else {return false}
      }
      default: {
        if (state === 0){return true}else {return false}
      }
    }
  }
  



  return (
    <>
    <div className="w-screen h-screen">
    <div className="w-full h-full flex flex-col flex-nowrap justify-center items-center bg-[#191919]">
      <h1 className="text-white w-6/12 flex flex-row flex-nowrap justify-center items-center">
        <div className="w-6/12 flex flex-row justify-end items-center">
          Main Work : {main.toFixed(2)}
          <div className="w-20"></div>
        </div>
        <div className="w-6/12 flex flex-row justify-start items-center">
          <input type="checkbox" checked={getSituation(1)} onClick={() => setStates(1)} className="toggle toggle-lg bg-black checked:bg-white"/>
         </div>
      </h1>
      <div className="h-10"/>
      <h1 className="text-white w-6/12 flex flex-row flex-nowrap justify-center items-center">
        <div className="w-6/12 flex flex-row justify-end items-center">
          Secondary Work  : {secondary.toFixed(2)}
          <div className="w-20"></div>
        </div>
        <div className="w-6/12 flex flex-row justify-start items-center">
          <input type="checkbox" checked={getSituation(2)} onClick={() => setStates(2)}   className="toggle toggle-lg bg-black checked:bg-white"/>
        </div>
      </h1>
      <div className="h-10"/>
      <h1 className="text-white w-6/12 flex flex-row flex-nowrap justify-center items-center">
        <div className="w-6/12 flex flex-row justify-end items-center">
          None
          <div className="w-20"></div>
        </div>
        <div className="w-6/12 flex flex-row justify-start items-center">
          <input type="checkbox" checked={getSituation(0)} onClick={() => setStates(0)}  className="toggle toggle-lg bg-black checked:bg-white"/>
        </div>
      </h1>
    </div>
  </div>
    </>
  )
}
