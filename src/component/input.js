import React  from 'react';
import loginpic from '../assets/loginpic.jpg';
import { useState , useEffect } from 'react';
import './styles/login.css';
import profile from '../assets/profile.jpg'
import {TiEdit} from 'react-icons/ti';



function InputComponent() {
  const [accountDisplay , setAccountDisplay]=useState('none');
  
  const [cardDisplay , setCardDisplay]=useState('block');
  
   const changeAccountDisplay = (event) => {
    
    setAccountDisplay(accountDisplay === 'none' ? 'flex' : 'none');
    localStorage.setItem('myDataKeydis', JSON.stringify(accountDisplay));
    setCardDisplay(cardDisplay === 'block' ? 'none' : 'block');
    localStorage.setItem('myDataKeycard', JSON.stringify(cardDisplay));
    event.preventDefault();
  };

  useEffect(() => {
 
    const savedDatacard = localStorage.getItem('myDataKeycard');
  
    if (savedDatacard) {
      
      const parsedDatacard = JSON.parse(savedDatacard);
  
      
      console.log("Data retrieved from localStorage:", parsedDatacard);
      setAccountDisplay(parsedDatacard)
    }
  }, []);
  

useEffect(() => {
  
  const savedDatadis = localStorage.getItem('myDataKeydis');

  if (savedDatadis) {
   
    const parsedDatadis = JSON.parse(savedDatadis);

    console.log("Data retrieved from localStorage:", parsedDatadis);
    setAccountDisplay(parsedDatadis)
  }
}, []);

  useEffect(() => {
   
    const savedData = localStorage.getItem('myDataKey');
  
    if (savedData) {
      
      const parsedData = JSON.parse(savedData);
  
      console.log("Data retrieved from localStorage:", parsedData);
      setForm(parsedData)
    }
  }, []);
  const [form, setForm] = useState({
    email:"",
    phoneNumber:"",
    name:"",
    age:"",
    password:"",

  });
 
 const [count, setCount] = useState(1);


 const updateForm = (e) =>{
  setForm({
    ...form,
    [e.target.name]: e.target.value,
    
  })
  localStorage.setItem('myDataKey', JSON.stringify(form));
 }

  return (
    <div className='bg-login'>
        <div className='login-img'>
            <img src={loginpic}></img>
        </div>
      <div className='login-card' style={{display : cardDisplay}}>
        <h2>seize the opportunity<br></br> to write a story of productivity</h2>
        <h3>Step {count} of 3</h3>
        <form className='col-4 form' onSubmit={(e)=>{e.preventDefault();}}>
 
       {count===1 ?(
        <div>
          <label>email ?</label>
        <br></br>
          <input
          type="email"
          name='email'
          value={form.email}
          onChange={updateForm}
          placeholder="Enter your name" />
<br></br>
          <label>phoneNumber ?</label>
        <br></br>
        <input
        type="text"
        name='phoneNumber'
        value={form.phoneNumber}
        onChange={updateForm}
        placeholder="Enter your name" />
          </div>
         ): null}
         {count===2 ?(
          <div>
          <label>name ?</label>
        <br></br>
          <input
          type="text"
          name='name'
          value={form.name}
          onChange={updateForm}
          placeholder="Enter your name" />
<br></br>
<label>Age ?</label>
        <br></br>
        <input
        type="number"
        name='age'
        value={form.age}
        onChange={updateForm}
        placeholder="Enter your name" />
         </div> ): null}
         {count===3 ?(
          <div>
          <label>password ?</label>
         <br></br>
          <input
          type="password"
          name='password'
          value={form.password}
          onChange={updateForm}
          placeholder="Enter your name" />
          </div>): null}
         {count===3 ?
         <button type='submit' onClick={changeAccountDisplay}>Submit</button>
         : null}




        </form>
        {count<3 ?
      <button className='back-btn' type='submit' onClick={()=> setCount(count-1)} >back</button>
         : null}
         {count>0 && count<3?
      <button type='submit' onClick={()=> setCount(count+1)} >next</button>
         : null}

        



        

        



      </div>
     <div className='data-pass' style={{ display : accountDisplay }}>
     <div className='acc'>
      <img className='acc-proimg' src={profile}></img>
      <h2>{form.name}</h2>
      <h2>{form.age} y/o</h2>
      <h2>{form.email}</h2>
      <h2>{form.phoneNumber}</h2>
      <button className='acc-btn' onClick={()=>{window.location.reload()}}>Edit profile <TiEdit/></button>

     </div>
     
     </div> 
    </div>
  );
}

export default InputComponent;