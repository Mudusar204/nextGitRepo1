import React, { useEffect, useRef } from 'react'
import useAuthPractice from '../../customHooks/useAuthPractice'
const AuthPractice = () => {
    const {fun,names,setName}=useAuthPractice()
   
  return (
    
    <div><button ref={names} onClick={fun}> click me</button></div>

    
  )
}
export default AuthPractice