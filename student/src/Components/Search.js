import { FormGroup, Typography, FormControl, InputLabel, Input, Button, TableBody, TableCell, TableHead, Table, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState, useEffect } from "react";
import { getStudents } from "../API/Webservice";

const useStyle = makeStyles( {
    contanier: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: '20px'
        }
    }
});

const Search = () => {
    const [studentData, setStudentData] = useState([]);
    const [detail, setDetail] = useState(false);

    const [searchedStudent, setSearchStudent] = useState([]);

    const style = useStyle();

    useEffect( () => {
        getAllStudents();
    });

    const getAllStudents = async () => {
        const students = await getStudents();
        setStudentData(students.data);
    };  

    const getStudent = studentData.filter( stu =>  stu.rollNo == searchedStudent);

    const details = () => {
        return (
        <Table className={style.table}>
        <TableHead>
            <TableRow className={style.thead}>
                <TableCell>Id</TableCell>
                <TableCell>Roll Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Gender</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                getStudent.map(stu => (
                    <TableRow>
                        <TableCell>{stu.id}</TableCell>
                        <TableCell>{stu.rollNo}</TableCell>
                        <TableCell>{stu.name}</TableCell>
                        <TableCell>{stu.age}</TableCell>
                        <TableCell>{stu.gender}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
        );
    }

    return (
        <FormGroup className={style.contanier}>
            <Typography variant="h4">Search</Typography>
            <FormControl>
                <InputLabel>Roll Number</InputLabel>
                <Input onChange={ (s) => {setSearchStudent(s.target.value)}}/>
            </FormControl>
            <Button variant="contained" color="primary" onClick={ () => setDetail(true)}>Search</Button>
            {detail && details()}
        </FormGroup>
        
    );
};

export default Search;