import { useEffect, useState } from 'react'
import { db,storage } from '../config/fires'
import { addDoc, collection, updateDoc, deleteDoc, doc, getDocs, } from 'firebase/firestore'
import { getStorage, ref,uploadBytes } from "firebase/storage";

import { async } from '@firebase/util'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
type todoType = {
    description: string,
    createdAt?: object,
    id?: string
}
const useUpdate = () => {
    // const storage = getStorage();
    // const storageRef = ref(storage);
    const [todo, setTodo] = useState<todoType[]>([])
    const [todoText, setTodoText] = useState<string>('')
    const [update, setUpdate] = useState<boolean>(false)
    // const [description, setDescription] = useState<string>('')
    const [oldValue, setOldValue] = useState<todoType>()
    const [idOfItem, setIdOfItem] = useState<string>('')
    const [loder,setLoder]=useState<boolean>(false)
    const [image,setImage]=useState<any>(null)
    useEffect(() => {
        console.log(todo);
        getDocuments()

    }, [])
    const upload= async(e:any)=>{
       
        try{
            const storageRef =ref(storage, `/images/${e.target.files[0].name}`);
            const result = await uploadBytes(storageRef, e.target.files[0].name)
            console.log('====================================',result);
        }
        catch(e){
            console.log(e);
            
        }
        // const storageRef = ref(storage, `/todosImages/${description}_${e.target.files[0].name}`);
            // return;   
            // const ImgRef=ref(storage,`images/${imageuploade.name}`)
            // const storage = getStorage();
            // const mountainsRef = ref(storage, 'images');
            // const mountainImagesRef = ref(storage, 'images/images');
        // const imgRef= ref.getStorage('/images/'+image.name).put(image).on('state changed',
        // alert('successfully uploaded'))
    }
    const getDocuments = async () => {
       
       try{ setLoder(true)
        const QuerySnapshot = await getDocs(collection(db, 'todo'));
        let todosList: todoType[] = []
        QuerySnapshot.forEach((doc: any) => {
            // console.log(doc.data(), 'for each wala doc');
            todosList.push({ description: doc.data().description, createdAt: doc.data().createdAt, id: doc.id, })
            // setTodo([...todo,QuerySnapshot])
        })
        // console.log(todosList, 'get docs wala');

        setTodo(todosList)}
        catch(e){
console.log(e);

        }
        finally{setLoder(false)}
    }
    const addItem = async () => {
        if (!(todoText)) {
            alert('enter a todo')
            return
        }

        // const newTodo = todoText
        let items: todoType = {
            description: todoText,
            createdAt: new Date(),

        }
        try {
            const newDocument = await addDoc(collection(db, 'todo'), items)
            // console.log(newDocument.id,'auto jenerated id');
            setIdOfItem(newDocument.id)
            // console.log('global state', idOfItem);



            // console.log(doc, 'try wala variable');


            // let newItems={ ...items, id:newDocument.id}
            // setTodo([...todo,{...items,id:newDocument}])
            setTodo([...todo, { ...items, id: newDocument.id }])
            console.log(todo);

            // setTodo([...todo, newItems])


        }
        catch (e) {
            console.log(e, 'catch wala error');

        }

        setTodoText('')
    }
    const updateItem = (item: any) => {
        console.log(item.id);
        console.log(item);

        setIdOfItem(item.id)
        setTodoText(item.description)
        setOldValue(item)
        // let index:number=todo.indexOf(item)
        setUpdate(true)
        //         setOldValue(index)

        //         // console.log(todoText, 'update wala text');


        // console.log('oldvalue called for', oldValue);
    }
    const onEdit = async () => {
        // let fieldToUpdate=doc(db,'todo',idOfItem);
        // updateDoc(fieldToUpdate,{description:todoText,})
        // console.log(updateDoc);

        // .then(()=>{alert('data updated');})
        // .catch((e)=>{console.log(e);
        // })
        try {
            const washingtonRef=doc(db, "todo", idOfItem);
            await updateDoc(washingtonRef, {
                description:todoText
              });
              console.log('try wala code chala');
              setTodoText('')
              setUpdate(false)
              getDocuments()
            // updateDoc(doc(db, "todos", idOfItem), {
            //     description: todoText
            // });
        }

        catch (e) {
            console.log(e);
        }
        // // let updateItem = todoText
        // console.log(todoText,'todowala text');
        // console.log(oldValue);


        // let hello:number = todo.indexOf(item);
        // console.log(hello,'hello wala ');

        // todo[index] = updateItem;
        // 
        // setTodo([...todo])
        // setTodoText('')
        // setUpdate(false) 
        // try{
        //     const updateReference=collection(db,'todo','newValue');
        //     await updateDoc(updateReference,{'newvalue'})
        //     // const updated=await updateDoc(collection(db,'todo'),updateItem)
        // }       catch(e){
        //     console.log(e,'update wala catch');

        // }
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
    const deleteHandler = async (item: any) => {
        // const filteredTodo=todo.filter((items)=>{
        //     if(item!=items){
        //         return todo
        //     }
        // })
        //    setTodo(filteredTodo)   

        try {
            // console.log("Item ID", item);

            // const docRef = doc(db, "todo", "item");
            // const docSnap = await getDoc(docRef);

            // if (docSnap.exists()) {
            //   console.log("Document data:", docSnap.data());
            // } else {
            //   // doc.data() will be undefined in this case
            //   console.log("No such document!");
            // }    
            // await deleteDoc(doc(db, "todo", item.id));

            await deleteDoc(doc(db, 'todo', item.id));
            let filteredTodo = todo.filter((items) => {
                if (item.id !== items.id) {
                    return items
                }
            })
            setTodo(filteredTodo)
            console.log(filteredTodo, 'filtered todo');

        } catch (e) {
            console.log(e);

        }
    }
    // let array:any[]=[{name:'rana',malik:12,}]
    // let object={
    //     name:'mudusar',
    //     rollNo:12
    // }
    // let newObject={...object,class:10}
    // let newArray:any[]=[...array,{...object,class:13}]
    // console.log(newArray,'array wala console');
    // console.log(todo);


    // console.log(newObject,'object wala console');
    return{
        image,
        setImage,
        upload,
        useEffect,
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
        setLoder,
        
    }
}
export default useUpdate
