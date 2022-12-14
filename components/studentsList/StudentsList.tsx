// import { Button } from "@chakra-ui/react";
import Button from "../button/Button";
import { useState } from "react";
import styles from '../../styles/Home.module.css'
// import styles from '../../styles/components/students/Students.module.css'

type sutdentType={
    no: string,
    name:string,
    rollNo: number,
    studentClass:string,
    batchNo:number,
}
const StudentsList =()=>{
    const [students, setstudents]=useState<sutdentType[]>([{
        no: "01",
        name: "mudusar",
        rollNo: 12,
        studentClass:"one",
        batchNo:1,

    },])
    const addStudentInList=()=>{
        const newStudent: sutdentType={
            no: "02",
        name: "malik",
        rollNo: 1,
        studentClass:"two",
        batchNo:1,
 
        }
        setstudents([...students,newStudent])
    }
    return(
<div>
<h1>student list</h1>
<table>
    <tr className={styles.container}>
        <th>No</th>
        <th>Name</th>
        <th>Roll No</th>
        <th>Class</th>
        <th>batch</th>
    </tr>
    {
        students.map((items)=>{
            return(
                <tr>
                    <td>{items.no}</td>
                    <td>{items.name}</td>
                    <td>{items.rollNo}</td>
                    <td>{items.studentClass}</td>
                    <td>{items.batchNo}</td>
                </tr>
            )
        })
    }
</table>
{/* <Button buttonTitle="Add student" onClick={addStudentInList} color="red"/> */}
{/* <button onClick={addStudentInList}>Add Students</button> */}
<Button buttonTitle="Add Students" color="red"  onClickHandler={addStudentInList}   />

</div>

    )
}

export default StudentsList