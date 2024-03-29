import { useState } from "react"
import { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "../config/fires"
// import { toast } from "react-toastify";
import { useRouter  } from "next/router";


export default function useLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)
  const router = useRouter();

  const onSubmitHandler = async () => {

    try {
      setLoader(true)
      await createUserWithEmailAndPassword(auth, email, password)

      // await signInWithEmailAndPassword(auth, email, password)
      // toast.success('Successfully login!');
      // router.push('/Update')
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

  return {
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setPassword,
    onSubmitHandler
  }
}