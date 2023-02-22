import { useState } from "react"
import { auth, createUserWithEmailAndPassword } from "../config/fires"
// import { toast } from "react-toastify";
import { useRouter  } from "next/router";
import { Divider } from "@chakra-ui/react";


export default function useSignUp() {
  const [userName, setUserName] = useState<string>("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)
  const router = useRouter();

  const onSubmitHandler = async () => {

    try {
      setLoader(true)
      await createUserWithEmailAndPassword(auth, email, password)
      // toast.success('Successfully singup!');
      router.push('/login')
    } catch (e) {
      // toast.error(e.message);
      console.log('====================================');
      console.log(e);
      console.log('====================================');
    }

    finally {
      setLoader(false)
    }
  }
  const login=()=>{
     try{
router.push('/login')
      }
      catch(e){
console.log(e);

      }
    
  }

  return {
    userName,
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setUserName,
    setPassword,
    onSubmitHandler,
    login
  }
}