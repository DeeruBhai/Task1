import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Pagination from "./Components/Pagination";
import { GoSignOut } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [meme, setMeme] = useState([1, 2]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostperpage] = useState(6);
  const navigate = useNavigate();
  useEffect(() => {
    const getMemeData = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const memes = await res.json();
      setMeme(memes.data.memes);
      // console.log(coins);
      setLoading(false);
      // console.log("memes");
      // console.log(memes.data.memes);
    };
    getMemeData();
  }, []);

  const lastpostindex = currentPage * postperpage;
  const firstpostindex = lastpostindex - postperpage;
  const currentposts = meme.slice(firstpostindex, lastpostindex);

  function handlelogout() {
    navigate("/");
  }

  return (
    <div className="memes_display">
      <div className="topbar">
        <p>Meme Gallery</p>

        <GoSignOut className="logout" onClick={handlelogout} />
      </div>
      <Cards memes={currentposts} />
      <Pagination
        totalposts={meme.length}
        postperpage={postperpage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
{
  /*  */
}
