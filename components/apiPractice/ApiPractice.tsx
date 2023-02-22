import { async } from "@firebase/util";
import { useState } from "react"
import axios from '../../config/axios-config'
import { Avatar } from "@chakra-ui/react";
import { inspect } from "util";
import instance from "../../config/axios-config";
const ApiPractice=()=>{
    const [userName,setUserName]=useState('');
    const [followers,setFollowers]=useState<any>([]);
 
    const getUsers=async()=>{
        try{
            const {data}=await axios.get(`/users/${userName}/followers`)
            console.log(data);
            setFollowers(data)
        }
        catch(e){
            console.log(e);
            
        }
    }
    return(
        <div>
<input type="text" placeholder="enter name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
<button onClick={getUsers}>getUsers</button>
 {followers.map((obj:any)=>{return(
    <div key={1}>
        {obj.login}
        <img src={obj.avatar_url} alt="imge"  height='100px' width='100px'/>
    </div>
 )})}
        </div>
    )
}
export default ApiPractice