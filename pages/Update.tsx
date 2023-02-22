import useUpdate from "../customHooks/useUpdate"
import { Input, Button,Text } from '@chakra-ui/react'
type todoType = {
    description: string,
    createdAt?: object,
    id?: string
}

const Update=()=>{
const {  useEffect,
    deleteHandler,
    onEdit,
    updateItem,
    getDocuments,
    addItem,
    todo,
    todoText,
    setTodo,
    setTodoText,
    update,setUpdate,
    idOfItem,setIdOfItem,
    loder,
    upload,
    setImage,
    setLoder,}=useUpdate()

    return (
        <div>
            
            {loder && <Text textAlign='center' size='80px' fontWeight='bold'>loading....</Text>}
            <Input onChange={(e) => setTodoText(e.target.value)} value={todoText} mt='20px' />
            <Button onClick={update ? onEdit : addItem}>{update ? 'UpdatThis' : 'Add Todo'}</Button> <br />
            <input type="file" onChange={event => event.target.files && setImage(event.target.files[0])} /> <br />
            <Button onClick={upload}>Upload Image</Button> <br />
            <Button onClick={getDocuments}>Show All Docs   </Button>
            

            <div>
                {
                    todo.map((item: todoType) => {
                        return (
                            <div>


                               <h1>Todos</h1> {item.description}  <br />
                                {/* <li>{item.createdAt}</li> */}

                                <Button onClick={() => updateItem(item)}>update</Button><br />
                                <Button onClick={() => deleteHandler(item)}>delete</Button>
                            </div>
                        )
                    })

                }

            </div>
        </div>
    )
}
export default Update