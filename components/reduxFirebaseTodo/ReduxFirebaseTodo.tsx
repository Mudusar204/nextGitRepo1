import useReduxFirebasetodo from "../../customHooks/useReduxFirebaseTodo"
import { useSelector } from "react-redux"
import { fetchTodos } from "../../store/reduxFirebaseTodoSlice"
const ReduxFirebaseTodo=()=>{
    const todos=useSelector((store:any)=>store.reduxFirebaseTodoSlice.todos)
    
    const {useEffect,deleteFunc,addTodoItem,setTodoText,todoText,updateFun,editFun,oldItem,setOldItem}=useReduxFirebasetodo()

    return(
        <div>
            <input placeholder="enter here your todo" onChange={(e) => setTodoText(e.target.value)} value={todoText}  />
            <button onClick={()=>addTodoItem()}>add</button>
            <button onClick={()=>editFun(oldItem)}>EditItem</button>
          
           {
             todos.map((item: any) => {
                return (
                    <div>


                        {item.description}  <br />
                        {/* <li>{item.createdAt}</li> */}

                        {/* <button onClick={() => updateItem(item)}>update</button><br /> */}
                        <button onClick={() => deleteFunc(item)}>delete</button>
                        <button onClick={() => updateFun(item)}>update</button>
                    </div>
                )
            })
           }
           
        </div>
    )
}
export default ReduxFirebaseTodo  