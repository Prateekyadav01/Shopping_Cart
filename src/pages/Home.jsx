import { useEffect, useState } from "react";
import Cart from "../pages/Cart"
import Navbar from "../components/Navbar";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[ post , setPost]=useState([]);
  const[loading,setLoading]=useState()
  async function ApiFetch(){
    try{
      const response = await fetch(API_URL);
      const data = response.json();
      setPost(data);
  }
  catch(error){
    console.log(error);
  }
  }


  useEffect(()=>{
    ApiFetch();
  },[]);


  return (
    <div>
      <Navbar/>
      {
        post.length>0?
        (<div>
          {
            post.map((post)=>(
              <Cart post={post} key={post.id}/>
            ))
          }
          </div>) :
        <div>

        </div>
      }
    </div>
  );
};

export default Home;
