import React, {useEffect, useState} from 'react';
import './WidStyle.css';

  export default function FormForNick() {
  
    const [nickName, setNickName] = useState('');
    const [serviceId, setServiceId] = useState('');
    const [token, setToken] = useState('');
  
     let url = `https://yoshpa-gateway-service.herokuapp.com/order/create`;
  
     const requestOptions = {
      method: 'POST',
      headers: { 
      'Authorization': token,
      'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerAlias: nickName,
        serviceId: serviceId,               
      })
  };      
  
  function sendNickname() {
    if(nickName) {
      fetch(url, requestOptions)
      .then(respons => respons.json())
      .then(data => {console.log(data)})
    } else {console.log("Введите свой ник")}
  };
  
     //нам нужен токен, его надо предварительно получить
     const reqOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'elmirasco@gmail.com', password: 'elmira'})
    };
  
    function getTokenAndSendNick(event) {
      event.preventDefault();
      fetch('https://yoshpa-registration-login.herokuapp.com/auth', reqOptions)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setToken(data.token)
        setServiceId(data.userId)
      });
    //   .then(sendNickname())
    }

    useEffect(()=> {
      console.log(serviceId + ",\n " + nickName + ',\n' + token)
    }, [serviceId])
     
    return (
      <form className="mform" noValidate autoComplete="off">
        <input className="inp"
          id="outlined-basic" 
          placeholder="Никнэйм" 
          value={nickName}
          onChange={(event)=> setNickName(event.target.value)}
        />
        <div>
          <button onClick={getTokenAndSendNick} className='mbutton'> 
              Оплатить
          </button>
        </div>
      </form>
    );
  }
  