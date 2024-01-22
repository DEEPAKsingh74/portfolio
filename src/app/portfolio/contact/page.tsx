import "./contact.css"

const Contact = () => {
  return (
    <div className='overflow-auto w-[100%] h-[100vh] justify-center items-center flex flex-col'>

      <div className="w-[80%] flex justify-center flex-col items-center">
        <h2 className='font-bold text-3xl text-slate-700 my-2'>Contact</h2>
        <p className="w-[40%] text-xs mb-2">Please consider contacting me using my <b>Email</b> or <b>Contact</b> in my resume this may be unreachable due to server.</p>
      </div>

      <div className='w-[70%] h-[65%] bg-[#d9d9d9] shadow-2xl rounded-lg flex flex-col items-center gap-6 py-8'>
        <div className='flex justify-evenly w-full'>
          <div className='flex flex-col w-[40%] gap-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Your Good Name' />
          </div>

          <div className='flex flex-col w-[40%] gap-2'>
            <label htmlFor="">Company Name</label>
            <select name="" id="">
              <option value="first company">first</option>
              <option value="first company">second</option>
              <option value="first company">third</option>
              <option value="first company">fourth</option>
            </select>
          </div>
        </div>


        <div className='flex flex-col w-[80%] gap-2'>
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" placeholder='Email to reach you out'/>
        </div>

        <div className='w-[80%] flex flex-col gap-2'>
          <label htmlFor="">Remark</label>
          <textarea name="" id="" className='resize-none'>

          </textarea>
        </div>

        <div>
          <button className="border-2 border-slate-600 px-6 py-1 rounded-3xl hover:bg-[#5f9ea0] hover:text-white hover:border-transparent font-semibold">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact