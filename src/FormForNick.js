import React, {useState} from 'react';
import './WidStyle.css';

  export default function FormForNick() {
    
    const [nickName, setNickName] = useState('');
    // const [serviceId, setServiceId] = useState('');
    // const [token, setToken] = useState('');
    const [orderId, setOrderId] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorNickName, setErrorNickName] = useState(null);
  
    let url = "https://yoshpa-gateway-service.herokuapp.com/order/create";    
    
    // временное решение, зашиваем токен и id
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbG1pcmFzY29AZ21haWwuY29tIiwicm9sZSI6WyJTSE9QIl0sImV4cCI6MTYyNDcyNzczMiwiaWF0IjoxNjI0NjQxMzMyfQ.0Gar7QAQAuRpLxob0xqUA4rTRaRULYsxNoeP6HmOKJo";
    const id = 149

    // временно закомментировала
    // function sendNickname(serviceId, token) {
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 
    //     'Authorization': 'Bearer ' + token,
    //     'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       customerAlias: nickName,
    //       serviceId: serviceId,               
    //     })
    //   };    
    //   console.log(requestOptions);

    //   if(nickName) {
    //     fetch(url, requestOptions)
    //     .then(respons => respons.json())
    //     .then(data => {console.log(data)})
    //   } else {console.log("Введите свой ник")}
    // };
  
    //нам нужен токен, его надо предварительно получить
    // const reqOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: 'elmirasco@gmail.com', password: 'elmira'})
    // };
  
    // function getTokenAndSendNick(event) {
    //   event.preventDefault();
    //   fetch('https://yoshpa-registration-login.herokuapp.com/auth', reqOptions)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     console.log(data)
    //     sendNickname(data.userId, data.token)
    //   })
    // }

    function getTokenAndSendNick(event) {
      event.preventDefault();

      const requestOptions = {
        method: 'POST',
        headers: { 
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerAlias: nickName,
          serviceId: id,               
        })
      };
      
      if(nickName) {
        fetch(url, requestOptions)
        .then(async response => {
          const data  = await response.json();
          if (response.status === 401 || response.status === 404 || response.status === 403) {
            setErrorMessage(data.message);
          } else {
            console.log(data);
            setOrderId(data);
            setNickName('');
          }
        })
        .catch(error => {console.log(error);})        
      } else {setErrorNickName("Введите свой ник")}
    }
     
    return (
      <form className="yoshpa-form" noValidate autoComplete="off">
        <input className="yoshpa-input"
          id="nick-input" 
          placeholder="Ваш никнэйм на yoshpa" 
          value={nickName}
          onChange={(event) => setNickName(event.target.value)}
          onFocus={() => {setErrorNickName(null);}}
        /> 
        <span className="yoshpa-span">{errorNickName}</span>      
        <button onClick={getTokenAndSendNick} className="yoshpa-button"> 
          Оплатить
        </button>      
        {orderId && <p>Номер вашего заказа: {orderId}</p>} 
        {errorMessage && <p>Ошибка: {errorMessage}</p>} 
      </form>      
    );
  }
  