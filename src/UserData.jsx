import { useRef } from "react";
import './Style.css'
function UserData()
{
    const MyHeading = useRef();
    const MyInput = useRef();
    const MyPeragraph = useRef ();
    const apiData = useRef();


    const fetchData = async ()=>{
        const res = await fetch("https://dummyjson.com/products/1")
       
        apiData.current = await res.json();
    }
    function MyBtn()
    {
        //MyHeading.current.innerHTML = "  <p>  HELLO </p>";
        MyHeading.current.setAttribute("width",300);
        MyHeading.current.style.color ="red"; 
        var userInfoValue = MyInput.current.value ;
        
        MyInput.current.focus();

        MyPeragraph.current.classList.remove("Pera");
        MyPeragraph.current.classList.add("newClass");

        MyHeading.current.innerText = JSON.stringify(apiData.current);
        console.log(apiData.current)

        
    }
    return(
        <>
        <button onClick={fetchData}>call </button>
           <h1  ref={MyHeading}></h1>
           <input type="text" ref={MyInput} />
           <p className="Pera"  ref={MyPeragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, debitis.</p>
           <button onClick={MyBtn}>Change  HTML VALUE/TEXT BUTTON</button>
        </>
    )
}
export default UserData;