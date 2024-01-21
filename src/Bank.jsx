
import { useState } from 'react';
import './Style.css'
function Bank()
{
   const [depoValue,DepoSetValue] = useState('');
   const [SubTotalDeposit,SetSubTotalDeposit] = useState(0);
   const [TotalTaka,SetTotalTaka] = useState(0);
   //widthrow section useState starts here 
   const [widthrowSubTotal,Set_widthrowSubTotal] = useState('');
   const [PrevSubtotal,SetPrevSubTotal] = useState(0);
   function OnDepoInput(e)
   {
      DepoSetValue(Number(e.target.value));
   }
   function OnAddMoneyBtn()
   {
      SetSubTotalDeposit((PrevTaka)=>depoValue+PrevTaka);
      const SubTotal = SubTotalDeposit  + depoValue ;
      SetTotalTaka(SubTotal)
   }
   /// for widthrow section starts here

   function OnWidthrowInput(e)
   {
      Set_widthrowSubTotal(Number(e.target.value));
   }
   function OnWidhtrowBtn()
   {
      SetPrevSubTotal((PrevWidthrowTaka)=>widthrowSubTotal+PrevWidthrowTaka);
     const newUpdate_Taka =  TotalTaka - widthrowSubTotal;
     SetTotalTaka(newUpdate_Taka)
   }
   return (
      <div>
         <h1> Welcome Admin  Dashboard </h1>

       <div className="main-div">
         <div className="left-div">
            <h1>Deposit balance {SubTotalDeposit} </h1>
            <input type="text" onChange={OnDepoInput} className='depoInput' /> <br />
            <button className='LoginBtn' onClick={OnAddMoneyBtn}>add Money</button>
         </div>
         <div className="middle-div">
             <h1 className='totalBalance'>Total Balance {TotalTaka+1000}</h1>
         </div>
         <div className="right-div">
             <h1>Widthrow balance {PrevSubtotal} </h1>
            <input type="text" onChange={OnWidthrowInput} className='depoInput' /> <br />
            <button onClick={OnWidhtrowBtn} className='LoginBtn'>Widthrow Money</button>
         </div>
       </div>
      </div>
   )
}
export default Bank;