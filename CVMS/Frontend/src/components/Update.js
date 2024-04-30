import axios from 'axios';
import { useState } from 'react';
function Update(){
    const [res1,setRes]=useState(null);
    function handleLogin(event){
        
            alert(document.getElementsByName('un')[0].value);
            event.preventDefault();
            axios.post('http://localhost:8081/update',{
                un: document.getElementsByName('un')[0].value,
                pw: document.getElementsByName('pw')[0].value,
                pwd: document.getElementsByName('pwd')[0].value
    
            }).then((res)=>{
                console.log(res.data);
                setRes(res.data);
            })
        }
    
        //alert("Login Clicked");
    
return(
    <div>
    <center>  
<p style={{fontSize:"xx-large"}}>Update</p> <br/><br/>
<form>
    Username: <input type="text" name="un" /> <br/><br/>
    Old Password: <input type="password" name="pw" /> <br/><br/>
    New Password: <input type="password" name="pwd" /> <br/><br/>
    <button onClick={handleLogin}>Update</button><br/><br/>
    <p>{res1}</p>
    </form>
    </center>  
    </div>
);
}

export default Update