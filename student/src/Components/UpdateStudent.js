import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateStudent, getStudents } from "../API/Webservice";

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

const UpdateStudent = () => {

    const [student,setStudent] = useState(initialData);
    const {name,rollNo,age,gender} = student;
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getStudents(id);
        setStudent(response.data);
    };

    const onValueChange = (s) => {
        setStudent({...student, [s.target.name]: s.target.value})
    };

    const updateStudentDetail = async () => {
        await updateStudent(id,student);
        history.push('/Students');
    } 

    const style = useStyle();
    return (
        <FormGroup className={style.contanier}>
            <Typography variant="h4">Update Student</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={ (s) => onValueChange(s)} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Roll Number</InputLabel>
                <Input onChange={ (s) => onValueChange(s)} name='rollNo' value={rollNo}/>
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input onChange={ (s) => onValueChange(s)} name='age' value={age}/>
            </FormControl>
            <FormControl>
                <InputLabel>Gender</InputLabel>
                <Input onChange={ (s) => onValueChange(s)} name='gender' value={gender}/>
            </FormControl>
            <Button variant="contained" onClick={() => updateStudentDetail() }color="primary">Update Student</Button>
        </FormGroup>
    );
};

export default UpdateStudent;