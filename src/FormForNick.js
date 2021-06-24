const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
  export default function FormForNick() {
    const classes = useStyles();
  
    const [nickName, setNickName] = useState('');
    const [serviceId, setServiceId] = useState('');
  
     let url = `https://yoshpa-gateway-service.herokuapp.com/order/create`;
     let token;
  
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
  
    function getTokenAndSendNick() {
      fetch('https://yoshpa-registration-login.herokuapp.com/auth', reqOptions)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        token = data.token
        setServiceId(data.userId)
    //    console.log(token)
      })
      .then(console.log(serviceId + ",\n " + nickName + ',\n' + token));
    //   .then(sendNickname())
    }
     
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          id="outlined-basic" 
          label="Никнэйм" 
          variant="outlined" 
          value={nickName}
          onChange={(event)=> setNickName(event.target.value)}
        />
        <div>
          <Button variant="contained" color="primary" 
          onClick={getTokenAndSendNick}
          > 
              Оплатить
          </Button>
        </div>
      </form>
    );
  }
  