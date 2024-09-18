import { useState } from "react";


const TweetInput = () => {

  const [Isdisabled, setIsDisabled] = useState(false);
  const [tweet, setTweet] = useState({
    tweetMsg:'',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTweet({...tweet, [name]: value})
  }

  const handleTweet = (e) => {
    e.preventDefault();
    setIsDisabled(true);

    console.log(tweet.tweetMsg);

    setTimeout(() => {
      setIsDisabled(false);
    }, 5000);
  }


  return(
    <div className="w-screen flex flex-row align-middle justify-center m-4">
        <form onSubmit={handleTweet} 
          className="rounded-3xl bg-gray-200 w-10/12 flex flex-row align-middle justify-center border-black border-[1px] ">
            <image href="../../../public/logo192.png" className="h-10 w-10 rounded-full bg-transparent"></image>
            <input  className="p-2 w-11/12 bg-transparent outline-transparent outline-[0px]"
                 placeholder="tweet" name="tweetMsg" value={tweet.tweetMsg} onChange={handleChange}/>
            <button className="m-1 w-8 h-8 rounded-full bg-transparent" type="submit" disabled={Isdisabled}>s</button>

        </form>
    </div>

  )
};


export default TweetInput;
