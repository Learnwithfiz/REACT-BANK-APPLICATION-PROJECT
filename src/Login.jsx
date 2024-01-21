import './Style.css'
import Bank from './Bank'
import { useState } from 'react';
function Login()
{
    const [userData,Set_User_Data] = useState('');
    const [IsLogin,SetIsLogin] = useState(false);
    function UserInfo(e)
    {
        Set_User_Data((PrevData)=>({
            ...PrevData,
            [e.target.name] : e.target.value
        }))
    }
    function OnLoginBtn()
    {
        var UserEmail = "fiz@gmail.com";
        var userpass = 123;
       if(userData.email==UserEmail && userData.pass == userpass)
       {
        SetIsLogin(true);
       } else{
        alert('pass & email doesnot match');
       }
    }
   return (
      <div>
          {
            IsLogin ? (<Bank />) : (
                <div className="Login">
                <h1 className='Title'>REACT LOGIN</h1>
                  <input onChange={UserInfo} name='email' className='LoginForm' type="text" placeholder='enter email' /> <br />
                  <input onChange={UserInfo} name='pass' className='LoginForm' type="text" placeholder='enter password' /> <br />
                  <button className='LoginBtn' onClick={OnLoginBtn}>Login</button>
              </div>
            )
          }
         
      </div>
   )
}
export default Login;