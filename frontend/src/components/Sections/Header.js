


const Header = () => {

  return(
    <div className="bg-gray-200 p-[1rem] ">
      <header className="flex flex-row align-middle justify-between">
        <h1 className="text-[2rem] text-sky-500 font-sans font-bold flex-row shrink-0 ">Twitter</h1>
        
        <div className="flex flex-col justify-center">
          <button className="bg-green-200 pl-[1rem] pr-[1rem] p-1 rounded-lg text-[1rem] shadow-black border-r-black">Login</button>
        </div>

      </header>
    </div>
  )
}

export default Header;
