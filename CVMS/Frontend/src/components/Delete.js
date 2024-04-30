import axios from 'axios';
import { useState } from 'react';
function Delete(){
    const [res1,setRes]=useState(null);
    function handleLogin(event){
        
            alert(document.getElementsByName('un')[0].value);
            event.preventDefault();
            axios.post('http://localhost:8081/delete',{
                un: document.getElementsByName('un')[0].value,
              
            }).then((res)=>{
                console.log(res.data);
                setRes(res.data);
            })
        }
    
        //alert("Login Clicked");
    
return(
    <div>
    <center>  
<p style={{fontSize:"xx-large"}}>Delete</p> <br/><br/>
<form>
    Username: <input type="text" name="un" /> <br/><br/>
    
    <button onClick={handleLogin}>Delete</button><br/><br/>
    <p>{res1}</p>
    </form>
    </center>  
    </div>
);
}

export default Delete