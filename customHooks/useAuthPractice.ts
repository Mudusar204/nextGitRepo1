import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const useAuthPractice = () => {
  let names:any=useRef()
  const [name,setName]=useState<string>('')
  const [roll,setRoll]=useState<string>()
    useEffect(()=>{
        toast.success('hi')
        console.log(names);
        
    },[name])
    const fun=()=>{
        toast.error('successfuly login')

        // setName(prompt('mlaik'))
        // setRoll(prompt('any'))
        
    }
  return {
    fun,names,setName
  }
}

export default useAuthPractice