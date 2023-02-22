import useReduxTodo from "../../customHooks/useReduxTodo"
import { useSelector } from "react-redux"
import { Box, Center, Input, Button } from "@chakra-ui/react"
const ReduxTodo = () => {
    const loading = useSelector((store: any) => store.reduxTodoSlice.loader);
    const { newDescription, setNewDescription, description, setDescription, addFun, todoss, delFun, updateFun, editTodo, oldObj } = useReduxTodo()
    return (
        <div>
            <Center border='2px solid purple'>
                <Box w='500px' h='auto' border='1px solid black' borderRadius='5px' textAlign='center' m='20px' p='20px'>
                    <Input type="text" size='sm' width='300px' placeholder="Enter here someThing" value={description} onChange={(e) => setDescription(e.target.value)}>
                    </Input><Button onClick={loading ? () => editTodo(oldObj) : addFun}>{loading ? "update" : "add"}</Button>
                    <Box>
                        {
                            todoss.map((obj: any, index: number) => {
                                return (
                                    <table>
                                        <tbody>
                                            <tr key={index}>
                                                <td>{obj.description}</td>
                                                <td> <button onClick={() => delFun(obj.description)}>Delete</button></td>
                                                <td> <button onClick={() => updateFun(obj)}>update</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Center>
        </div>
    )
}
export default ReduxTodo
