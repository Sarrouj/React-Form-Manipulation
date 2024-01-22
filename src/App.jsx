import { useState } from "react"

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName : "",
    email: "",
    birthDate: "",
    gender: "",
  })

  const [prompts, setPrompts] = useState([{
    prompt:"",
    answer:"",
    id : Math.floor(Math.random()*10000000)
  }]);

  function handleInput(e){
    const  {name, value} = e.target;
    setUserInfo({
      ...userInfo,
      [name] : value
    })
  }

  function addPropmpt(e){
    e.preventDefault();
    setPrompts(
      [...prompts, {
        prompt:"",
        answer:"",
        id : Math.floor(Math.random()*10000000)
      }]
    )
  }

  function handlePrompts(e, index){
    const {name, value} = e.target;
    if( name == "prompt") prompts[index].prompt = value;
    if( name == "answer") prompts[index].answer = value;
    
    console.log(prompts)
  }

  function handleDelete(e, i){
    e.preventDefault();
    let allPromps = [...prompts];
    allPromps = allPromps.filter((promp)=> promp.id !== allPromps[i].id);
    setPrompts(allPromps);
  }

  return (
    <div className="container mx-auto flex flex-col items-center mb-20">
      <h1 className="text-4xl font-semibold mt-5">React Forms</h1>
      <form className="mt-5 w-1/2">
        <fieldset className="border py-2 px-4">
          <legend className="text-lg font-semibold px-3">About You</legend>
          <div className="flex flex-col gap-3 mb-2">
            <label className="font-semibold text-2xl">What's is your name?</label>
            <input type="text" placeholder="First name" className="px-2 py-1 bg-slate-100 focus:outline-none focus:bg-white"
              name="firstName"
              onChange={(e)=> handleInput(e)}
            />
            <input type="text" placeholder="Last name" className="px-2 py-1 bg-slate-100 focus:outline-none focus:bg-white"
              name="lastName"
              onChange={(e)=> handleInput(e)}
            />
          </div>
          <div className="flex flex-col gap-3 mb-2">
            <label className="font-semibold text-2xl">What's is your Email?</label>
            <input type="email" placeholder="sarrouj@gmail.com" className="px-2 py-1 bg-slate-100 focus:outline-none focus:bg-white"
              name="email"
              onChange={(e)=> handleInput(e)}
            />
          </div>
          <div className="flex flex-col gap-3 mb-2">
            <label className="font-semibold text-2xl">What's is your Date of birth?</label>
            <input type="date" className="px-2 py-1 bg-slate-100 focus:outline-none focus:bg-white"
              name="birthDate"
              onChange={(e)=> handleInput(e)}
            />
          </div>
          <div className="flex flex-col gap-3 mb-2">
            <label className="font-semibold text-2xl">What's is your Gender?</label>
            <select name="gender" id="gender" className="px-2 py-1 bg-slate-100 focus:outline-none focus:bg-white"
              onChange={(e)=> handleInput(e)}
            >
              <option>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="border py-2 px-4">
          <legend className="text-lg font-semibold px-3">Prompts</legend>
            {prompts.map((prompt, i)=> (
               <div key={prompt.id} className="flex flex-col gap-3 mb-2">
                <label className="font-semibold text-2xl">Select a prompt</label>
               <div className="flex gap-2">
               <select name="prompt" id="prompt" className="px-2 py-1 bg-slate-100 focus:outline-none focus:bg-white"
                  onChange={(e)=> handlePrompts(e, i)}
                >
                  <option value="Dating me is like...">Dating me is like...</option>
                  <option value="Fact about me that surprises people">Fact about me that surprises people</option>
                  <option value="I want someone who...">I want someone who...</option>
                  <option value="The most spontaneouus thing I've done">The most spontaneouus thing I've done</option>
                  <option value="We're the same type of weird if...">We're the same type of weird if...</option>
                </select>
                <button className="text-white font-extrabold text-lg bg-red-400 px-3 rounded"
                  onClick={(e) => handleDelete(e, i)}
                >-</button>
               </div>
                <textarea name="answer" id="answer" rows="5"
                  placeholder="Let your true colours shine through"
                  className="border border-dashed py-3 px-2 bg-slate-100 focus:outline-none focus:bg-white"
                  onChange={(e)=> handlePrompts(e, i)}
                ></textarea>
              </div>
            ))}
          <div className="w-full flex justify-center my-5">
            <button className="bg-blue-400 text-white px-3 py-2 rounded font-semibold text-sm"
              onClick={(e) => addPropmpt(e)}
            >ADD PROMPT</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default App
