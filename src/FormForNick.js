import React, {useEffect, useState} from 'react';
import './WidStyle.css';

  export default function FormForNick({domElement}) {
    
    const isCustomStyles = domElement.hasAttribute('customStyles');
    // console.log(domElement);  
  
    const [nickName, setNickName] = useState('');
    const [serviceId, setServiceId] = useState('');
    const [token, setToken] = useState('');
    // Стили
    const [formStyle, setFormStyle] = useState('wform');
    const [inputStyle, setInputStyle] = useState('winput');
    const [buttonStyle, setButtonStyle] = useState('wbutton');
  
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
      if(isCustomStyles) {
        const styles = domElement.getAttribute('customStyles');
        const stylesArr = styles.split(' ');
        if(stylesArr[0]) {setFormStyle(stylesArr[0])}
        if(stylesArr[1]) {setInputStyle(stylesArr[1])}
        if(stylesArr[2]) {setButtonStyle(stylesArr[2])}        
      }
    }, [serviceId])
     
    return (
      <form className={formStyle} noValidate autoComplete="off">
        <input className={inputStyle}
          id="nick-input" 
          placeholder="Никнэйм" 
          value={nickName}
          onChange={(event)=> setNickName(event.target.value)}
        />       
        <button onClick={getTokenAndSendNick} className={buttonStyle}> 
          Оплатить
        </button>       
      </form>
    );
  }
  