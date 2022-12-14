import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
const Update = () => {
    const [todo, setTodo] = useState<string[]>([])
    const [todoText, setTodoText] = useState<string>('')
    const [update, setUpdate] = useState<boolean>(false)
    const [oldValue, setOldValue] = useState<string>('')
    const addItem = () => {
        if (!(todoText)) {
            alert('enter a todo')
            return
        }
        const newTodo = todoText
        setTodo([...todo, newTodo])
        setTodoText('')
    }
    const updateItem = (item: any) => {
        setTodoText(item)

        setUpdate(true)
        setOldValue(item)
        // console.log(todoText, 'update wala text');


        // console.log('oldvalue called for', oldValue);
    }
    const onEdit = () => {
        let updateItem = todoText
        console.log(todoText,'todowala text');

        let hello:number = todo.indexOf(oldValue);
        console.log(hello,'hello wala ');
        
        todo[hello] = updateItem;

        setTodo([...todo])
        setTodoText('')
setUpdate(false)        
        //     console.log('edit handler called for this',todoText, oldValue );
        //     console.log(updateItem,'update variable');
        //    console.log(todo,'todo wali');
        // let updatedTodos = todo.map((item) => {
        //     // console.log(item, 'map wali item');
        //     if (item != updateItem) {
        //         console.log('if wala code chala');
        //         return updateItem
                
        //     } else {
        //         console.log('else wala code chala');
        //         return item
                
        //     }
        // })
        // setTodo(updatedTodos)
        // setUpdate(false)
        // setTodoText('')
        //     if(todoText!=oldValue){
        //         // setTodo([...todo,todoText])
        // todo.map((todo,item)=>{
        //     // if(oldValue==item){
        // // setOldValue(updateValue)
        // console.log(updateValue,'updated value');
        // console.log(todo,'todo');
        // console.log(item,'itme');
        // return updateValue
        // })
        //     }
        // else{todo}
    }
    return (
        <div>
            <Input onChange={(e) => setTodoText(e.target.value)} value={todoText} mt='20px' />
            <Button onClick={update ? onEdit : addItem}>{update ? 'UpdatThis' : 'Add'}</Button> <br />
            <div>
                {
                    todo.map((item) => {
                        return (
                            <div>
                                {item} <br />
                                <Button onClick={() => updateItem(item)}>update</Button><br />
                            </div>
                        )
                    })

                }

            </div>
        </div>
    )
}
export default Update