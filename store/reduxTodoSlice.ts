import { createSlice } from "@reduxjs/toolkit";
interface todoType {
    id: number,
    description: string
}
const reduxTodo = createSlice({
    name: 'reduxTodo',
    initialState: { todos: [] as todoType[], index: 0, loader: false, id: 0 },
    reducers: {
        add: (state, actions) => {
            if (!actions.payload) {
                alert('plz enter a todo')
                return
            }
            const newTodo: todoType = {
                id: state.index,
                description: actions.payload
            };
            state.todos.push(newTodo);
            state.index = state.index + 1
        }
        ,
        deleteFun: (state, actions) => {
            let newArray = state.todos.filter((obj) => {
                if (obj.description != actions.payload) {
                    console.log(obj.id, '  filter wala code');
                    return obj
                }
            })
            console.log(actions.payload, 'delete wala array');
            return { ...state, todos: newArray }
        },
        // deleteFun: (state, actions) => {
        //     state.todos = state.todos.filter((obj) => {
        //       return obj !== actions.payload;
        //     });
        //   },
        //         update:(state,actions)=>{
        // console.log('update wala code chala' ,actions.payload);


        //         }
        update: (state, actions) => {
            state.loader = true
            state.id = actions.payload.id
            console.log(state.id, 'slice wali id');
        },
        onEdit: (state, actions) => {
            state.loader = false

            state.todos = state.todos.map((todo) => {
                if (todo.id === actions.payload.id) {
                    return {
                        ...todo,
                        description: actions.payload.description,
                    };
                }
                return todo;
            });
        }
        // onEdit:(state,actions)=>{
        //     state.loader=false
        //     // console.log(actions.payload.id, 'onedit wala code ma id');

        //     let updatedTodos = state.todos.map((obj) => {
        //         if(obj.id === state.id) {
        //             console.log('if wala code ma description',actions.payload.description);

        //             return { ...obj, description:actions.payload.description  }
        //         }
        //         console.log('else wala code chala');
        //         return obj

        //       })
        //       state.todos = updatedTodos

        // }
    }
})
export const { add, deleteFun, update, onEdit } = reduxTodo.actions
export default reduxTodo.reducer