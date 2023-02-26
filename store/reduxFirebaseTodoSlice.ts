import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db, storage } from '../config/fires'
import { addDoc, collection, updateDoc, deleteDoc, doc, getDocs, } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from "firebase/storage";
import ReduxFirebaseTodo from "../components/reduxFirebaseTodo/ReduxFirebaseTodo";

type todoType = {
    description: string,
    createdAt: any,
    id: number
}
const fireBaseTodo = createSlice({
    name: 'reduxFirebaseTodo',
    initialState: { todos: [] as todoType[], error: null, item: {} },
    reducers: {
        updateItem: (state, actions) => {
            console.log('update item wala chala', actions);
            state.item = actions.payload
            console.log(state.item);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addTodo.fulfilled, (state, action:any) => {
                console.log(action.payload);
                state.todos.push(action.payload)
                let newState:any={
                    ...state,todos:action.payload
                }
                // return newState
                state=newState
            });
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                let newState: any = {
                    ...state, todos: action.payload
                }
                console.log(state.todos, 'todos');
                return newState
            });
        builder
            .addCase(deleteTodo.fulfilled, (state, action) => {
                // const todos=action.payload
                const item = action.payload
                let filteredTodos = state.todos.filter((todo) => item.id !== todo.id)
                let newState: any = {
                    ...state, todos: filteredTodos
                }
                // state.todos=action.payload
                console.log(state.todos, 'todos');

                return newState
            });
        builder
            .addCase(onEdit.fulfilled, (state:any, action) => {
                // console.log('edit wala funtion to chal pra', action.payload.id);

                const newTodos: any = state.todos.map((todo:any) => {
                    if (todo.id === state.item.id) {
                        console.log('if wala chala', action.payload)
                        todo.description=action.payload
                    } else {
                        console.log('else wala chala');
                        
                        return todo
                    }
                    // let newState:any= {
                    //     ...todo, todos: newTodos,
                    // }
                    // return newState
                })
               
            })
    }
})
export const { updateItem } = fireBaseTodo.actions
export default fireBaseTodo.reducer
export const addTodo = createAsyncThunk('add/todo', async (todoText,Dispatch) => {
    // let text =todoText
    // if (text == '') {
    //     alert('enter a todo') 
    //     return
    // }
    let items = {
        description: todoText,
        createdAt: new Date(),
    };
    try {
        const newDocument = await addDoc(collection(db, 'todo'), items)
        let newItems = { ...items, id: newDocument.id }
        return newItems
    }
    catch (e) {
        console.log(e, 'catch wala error');
    }
})
export const fetchTodos = createAsyncThunk('fetch/todo', async () => {
    try {
        const QuerySnapshot = await getDocs(collection(db, 'todo'));
        let todosList: todoType[] = []
        QuerySnapshot.forEach((doc: any) => {
            todosList.push({ description: doc.data().description, createdAt: doc.data().createdAt, id: doc.id, })
        })
        return todosList
    }
    catch (e) {
        console.log(e);
    }
});
export const deleteTodo = createAsyncThunk('delete/todo', async (item:any,Dispatch) => {
    console.log(item, 'slice ma se item');
    try {
        const res = await deleteDoc(doc(db, 'todo', item.id));
        return item
    }
    catch (e) {
        console.log(e, 'catch wala error');
    }
}
);
// export const onEdit = createAsyncThunk('edit/todo', async (newDescription,{getState}) => {
// const state=getState()
//     const washingtonRef = doc(db, "todo", state.item.id);
// console.log(newDescription,'todotext from edit action',);

//     await updateDoc(washingtonRef, {
//         description: newDescription
//     });
//     return newDescription
// })
export const onEdit = createAsyncThunk('edit/todo', async (newDescription, { getState }) => {
    const state = getState().reduxFirebaseTodoSlice;
    const items = state.item;
    console.log('Initial value:', items, 'state', state);
    const washingtonRef = doc(db, "todo", items.id);
    console.log(newDescription, 'todotext from edit action',);
    await updateDoc(washingtonRef, {
        description: newDescription
    });
    return newDescription
});
