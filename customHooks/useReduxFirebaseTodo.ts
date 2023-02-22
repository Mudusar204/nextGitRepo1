import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../store/reduxFirebaseTodoSlice"
import { deleteTodo,addTodo ,onEdit} from "../store/reduxFirebaseTodoSlice"
import { updateItem } from "../store/reduxFirebaseTodoSlice"
const useReduxFirebasetodo = () => {
    const Dispatch = useDispatch()
    const [todoText,setTodoText]=useState('')
    const [oldItem,setOldItem]=useState({})
    useEffect(()=>{
        Dispatch(fetchTodos())
    },[])
    const deleteFunc=(item:any)=>{
Dispatch(deleteTodo(item))
    }
    const addTodoItem=()=>{
Dispatch(addTodo(todoText))
setTodoText('')
    }
    const updateFun=(item:any)=>{
        Dispatch(updateItem(item))
        setTodoText(item.description)
        setOldItem(item)
    }
    const editFun=(editWaliItem)=>{
        let newDescription=todoText
Dispatch(onEdit(newDescription))
setTodoText('')
    }
    return {
        useEffect,deleteFunc,addTodoItem,todoText,setTodoText,updateFun,editFun,oldItem,setOldItem
    }
   
}
export default useReduxFirebasetodo