import { useRef } from "react";
import './Style.css'
function MyUserRef()
{
   const HeadingTitle = useRef();
   const MyPara = useRef();
   const MyInput = useRef();
   const My_Api_ref = useRef();
   function MyBtn()
   {
      HeadingTitle.current.innerHTML= "<h1>Learn With Fiz </h1>"
      HeadingTitle.current.setAttribute("id","FIZ");
      HeadingTitle.current.setAttribute("width",400);
      HeadingTitle.current.setAttribute("height",400);
      HeadingTitle.current.setAttribute("title","Learn Fiz");
      HeadingTitle.current.style.color = "red"
      MyPara.current.classList.add('newClass');
      MyInput.current.focus();
      HeadingTitle.current.innerHTML = JSON.stringify(My_Api_ref.current) ;
      
   }
   async function  APISHOW()
   {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      My_Api_ref.current = await data.json();

   }
    return (
        <>
          <button onClick={APISHOW}>My DATA API</button>
           <h1  ref={HeadingTitle} >Hello Bangladesh</h1>
            <p  ref={MyPara} className="Pera">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis.</p>
             <input type="text" ref={MyInput} />
           <button onClick={MyBtn}>CHANGE HTML VALUE</button>
        </>
    )
}
export default MyUserRef;