import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  //ref hook
  const passref = useRef(null)

  const passwordgenerator = useCallback(() =>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (charallowed) str+= "!@#$%^&*+-/(){}[];:<>,.";

    for(let i=1; i<=length; i++){
    let char = Math.floor(Math.random()* str.length +1);
    pass += str.charAt(char);
    console.log(pass);
    }

    setpassword(pass);

  }, [length,numberallowed, charallowed, setpassword]);

  const copypasswordtoclipboard = useCallback(()=> {
    passref.current?.select();
    passref.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=> {
    passwordgenerator()
  }, [length, numberallowed, charallowed, passwordgenerator])

  return (
    <>
      {/* <h1 className='text-4xl text-center'>Password generator</h1> */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg
       px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" 
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder='Your password' readOnly
          ref={passref}
          />
          <button  
          onClick={copypasswordtoclipboard}
          className='outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0 hover:bg-amber-500 hover:text-white'>
          Copy</button>

        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label> Length : {length}</label>
          </div>
          <div>
            <input type="checkbox" 
            defaultChecked={numberallowed}
            id="numbeInput"
            onChange={()=>{
              setnumberallowed((prev) =>! prev);
            }}
            />
            <label> Numbers  {numberallowed}</label>
          </div>
          <div>
            <input type="checkbox" 
            defaultChecked={charallowed}
            id="characterinput"
            onChange={()=>{
              setcharallowed((prev) =>! prev);
            }}
            />
            <label> Characters  {numberallowed}</label>
          </div>
        </div>
        </div>
    </>
  )
}

export default App
