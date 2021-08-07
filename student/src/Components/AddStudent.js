import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addStudent } from "../API/Webservice";

const useStyle = makeStyles( {
    contanier: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: '20px'
        }
    }
});

const initialData = {
    name:'',
    rollNo:'',
    age:'',
    gender:''
}

const AddStudent = () => {

    const [student,setStudent] = useState(initialData);
    const {name,rollNo,age,gender} = student;
    const history = useHistory();

    const onValueChange = (s) => {
        setStudent({...student, [s.target.name]: s.target.value})
        
    };

    const addStudentDetail = async () => {
        await addStudent(student);
        history.push('./Students');
    } 

    const style = useStyle();
    return (
        <FormGroup className={style.contanier}>
            <Typography variant="h4">Add Student</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={ (s) => onValueChange(s)} name='name'/>
            </FormControl>
            <FormControl>
                <InputLabel>Roll Number</InputLabel>
                <Input onChange={ (s) => onValueChange(s)} name='rollNo'/>
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input onChange={ (s) => onValueChange(s)} name='age'/>
            </FormControl>
            <FormControl>
                <InputLabel>Gender</InputLabel>
                <Input onChange={ (s) => onValueChange(s)} name='gender'/>
            </FormControl>
            <Button variant="contained" onClick={() => addStudentDetail() }color="primary">Add Student</Button>
        </FormGroup>
    );
};

export default AddStudent;