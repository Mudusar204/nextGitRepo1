import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { add, deleteFun, update, onEdit } from "../store/reduxTodoSlice"
const useReduxTodo = () => {
    const todoss = useSelector((store: any) => store.reduxTodoSlice.todos);
    const dispatch = useDispatch();
    const [description, setDescription] = useState<string>('')
    const [newDescription, setNewDescription] = useState<string>('')
    const [oldObj, setOldObj] = useState({})
    useEffect(() => {
        setOldObj({ ...oldObj, description: description })
    }, [description])
    const addFun = () => {
        dispatch(add(description))
        setDescription("")
    };
    const delFun = (e: any) => {
        dispatch(deleteFun(e))
        console.log(todoss);
    }
    const updateFun = (obj: any) => {
        setOldObj(obj)
        console.log(oldObj);
        setDescription(obj.description)

        dispatch(update(obj))
    };
    const editTodo = (e: any) => {
        dispatch(onEdit(e))
        // setOldObj({...oldObj,description:description})
        setDescription('')

        console.log(oldObj, 'it is updated object');
    }
    return { setNewDescription, newDescription, description, setDescription, addFun, todoss, delFun, updateFun, editTodo, oldObj }
}
export default useReduxTodo