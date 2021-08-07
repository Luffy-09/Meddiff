import { TableBody, TableCell, TableHead, TableRow, Table, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../API/Webservice";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin : '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#333333',
            color: '#ffffff'
        }
    }
});

const Students = () => {

    const [student, setStudent] = useState([]);

    const style = useStyle();

    useEffect( () => {
        getAllStudents();
    });

    const getAllStudents = async () => {
        const students = await getStudents();
        setStudent(students.data);
    };  

    const deleteStudentData = async (id) => {
        await deleteStudent(id);
        getAllStudents();
    }

    return (
        <Table className={style.table}>
            <TableHead>
                <TableRow className={style.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Roll Number</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    student.map(stu => (
                        <TableRow>
                            <TableCell>{stu.id}</TableCell>
                            <TableCell>{stu.rollNo}</TableCell>
                            <TableCell>{stu.name}</TableCell>
                            <TableCell>{stu.age}</TableCell>
                            <TableCell>{stu.gender}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/Update/${stu.id}`}>Update</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteStudentData(stu.id) }>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
};
export default Students;