import styles from '../styles/Todo.module.css'
import { InputGroup, InputRightElement, Input, Box, Center, color } from '@chakra-ui/react'
import { Button, Text } from '@chakra-ui/react'
import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { collection, getDocs, addDoc } from "firebase/firestore";

import { db } from '../config/fires'
// import Button from '../components/button/Button'
const Todo = () => {
  const [todo, setTodo] = useState<string[]>([])
  const [todoItem, setTodoItem] = useState<string>('')
  const [completeTodo, setCompleteTodo] = useState<any[]>([])
  const [update,setUpdate]=useState<boolean>(false)
  const [oldItem,setOldItem]=useState({})
  const addTodoItem = () => {
    if (!(todoItem)) {
      alert('enter a todo')
      return
    }
    if(update==true){
      setTodoItem('rana')
    }
    const addNewTodoItem = todoItem
    setTodoItem(addNewTodoItem)
    setTodo([...todo, addNewTodoItem])
    setTodoItem('')
  }
  const deleteItem = (item: any) => {

    const del = todo.filter((todos) => {
      if (todos != item) {
        console.log('delete items', item);

        return todo
      }
    })
    setTodo(del)
  }
  const updateHandler = (item: any) => {
    console.log('update handler called', item);
    let value=item
setTodoItem(value)
setUpdate(true)
onEditHandler()
const updateValue=todo.map((item)=>{
  if(value==item){
    return todo
  }
})
// setTodo([...todo,setTodoItem])
  }
const onEditHandler=()=>{
  // let updateItem={
  //   item:todoItem
  // }
  // let updatedTodos=todo.map((todos)=>{
  //   if(oldItem.item==todos.item){
  //     return updateItem
  //   }
  //   else{
  //     return todos
  //   }
  // })
  // setTodo(updatedTodos)
  // setUpdate(false)

//   if(update==true){
    
// // setTodoItem()
//   }
}
  const completedItem = (item: any) => {
    console.log('complete handler called', item);
    setCompleteTodo([...completeTodo, item])
  }
  ////////////////
  //   const onDeleteHandler = (item:any)=>{
  //     console.log("user want to delete this item", item);
  //    let filteredTodos = todo.filter((todo)=>{
  //         if(todo != item){
  //             return todo
  //         }
  //     })
  //     setTodo(filteredTodos)
  // }
  const onTodoSubmitHandler = async () => {
    const newDoc = {
        // description,
        createdAt: new Date(),
        name: 'any'
    }
    try {
        const docReference = await addDoc(collection(db, "todos"), newDoc);
        console.log("Document written with ID: ", docReference.id);

        // setTodos([...todos, { ...newDoc, id: docRef.id }])
    } catch (e) {
        console.error("Error adding document: ", e);
    }



}
  ///////////////////////////////////
  return (
    <div>
      <Box h='auto' w='100%' className={styles.mainContainer} mb='30px' mt='30px'>
        <Center h='800px' w='100%' >
          <Box bg='rgb(202 238 249)' h='300px' w='50%' borderRadius='15px'>
            <div>
              <Box m='30px' bg='white' borderRadius='5px'>
                <InputGroup size='md'>
                  <Input
                    type="text"
                    value={todoItem}
                    onChange={(e) => setTodoItem(e.target.value)}
                    pr='4.5rem'
                    placeholder='Add a Task Here...' />
                  <InputRightElement >
                    <Button bg='rgb(58 123 213)' fontSize='2xl' fontWeight='bold' color='white' onClick={update?onEditHandler:addTodoItem} 
                      borderTopLeftRadius='0px' borderBottomLeftRadius='0px' _hover={{ color: 'black', backgroundColor: "white", }}>
                        {update? <EditIcon />:'+'}
                        
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </div> 
            <div>
              <Box m='30px' bg='white' borderRadius='5px' borderTop='2' maxH='30px'>
                {todo.map((item) => {
                  return (
                    <Box p='0px' display='flex' justifyContent='space-between' bg='white' borderRadius='10px' h='40px' mt='10px' fontWeight='bold' color='rgb(58 123 213)'
                    >
                      <Text display='flex' alignItems='center' pl='20px' >
                        {item}
                      </Text>
                      <br />
                      <br />
                      <Box>
                        <Button bg='white' onClick={() => completedItem(item)}>
                          <CheckIcon />
                        </Button>
                        <Button bg='white' onClick={() => deleteItem(item)}>
                          <DeleteIcon />
                        </Button>
                        <Button bg='white' onClick={()=> updateHandler(item)}>
                          <EditIcon />
                        </Button>
                      </Box>
                    </Box>)
                })}
              </Box>
            </div>
            {/* <br /> */}
            <div>
              <Box m='30px' bg='white' borderRadius='5px' borderTop='2' maxH='30px'>
                {completeTodo.map((item: any) => {
                  return (
                    <Box p='0px' display='flex' justifyContent='space-between' bg='white' borderRadius='10px' h='40px' mt='10px' fontWeight='bold' color='rgb(58 123 213)'
                    >
                      <Text display='flex' alignItems='center' pl='20px' >
                        {item}
                      </Text>
                      <br />
                      <br />
                      <Box>
                        {/* <Button bg='white' > */}
                        <CheckIcon mr='40px' mt='5px' p='3px' h='20px' w='20px' fontWeight='bold' color='white' backgroundColor='blue' borderRadius='50%' />
                        {/* </Button>              */}
                      </Box>
                    </Box>)
                })}

              </Box>
            </div>
          </Box>
        </Center>
      </Box>
    </div>
  )
}
export default Todo