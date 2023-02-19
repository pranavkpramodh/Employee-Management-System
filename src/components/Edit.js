import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Employee from './Employee';

function Edit() {
    const [ id, setId] = useState(0 );
    const [ empName, setEmpName] = useState('');
    const [ age, setAge] = useState(0);
    const [ designation, setDesignation] = useState('');
    const [ salary, setSalary] = useState(0);

    useEffect (() =>{
        setId(localStorage.getItem('id'))
        setEmpName(localStorage.getItem('empName'))
        setAge(localStorage.getItem('age'))
        setDesignation(localStorage.getItem('designation'))
        setSalary(localStorage.getItem('salary'))

        
    },[])//array placed for stop continues working
    console.log(empName);

    let index = Employee.map(item => item.empName).indexOf(empName)
    console.log(index);

    let history = useNavigate()
    const handleUpdate = (e) => {
        e.preventDefault();//avoid refreshing
        console.log(e);
        let emp = Employee[index]
        console.log(emp);// full details of employee
        emp.id = id;
        emp.empName = empName;
        emp.age = age;
        emp.designation = designation;
        emp.salary = salary;
        console.log(emp);//updated details of employee

        history('/')

    }



    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div>
        
        <div style={{maxWidth:'1000px', width:'95%'}}>
            <h1 className='text-primary text-center p-3'>Employee Management System</h1>
            <p className='p-4  text-center '>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management.</p>
        </div>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
            <Row style={{maxWidth:'1000px', width:'95%',display:'flex',justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                <Col>
                    <img style={{maxWidth:'400px', minWidth:'250px', width:'100%'}} src='https://cdn-icons-png.flaticon.com/512/1803/1803615.png' />
                </Col>

                <Col className='p-3'>
                    <Form  style={{maxWidth:'400px',minWidth:'250px', width:'100%'}} className='border border-2 p-3 '>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your ID"value={id} onChange = {(e) => setId(e.target.value) } required/>
                          
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" value={empName}  onChange = {(e) => setEmpName(e.target.value) } required/>
                          
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Age" value={age} onChange = {(e) => setAge(e.target.value) } required />
                          
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Designation" value={designation}  onChange = {(e) => setDesignation(e.target.value) } required/>
                          
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Salary" value={salary}  onChange = {(e) => setSalary(e.target.value) } required/>
                          
                        </Form.Group>

                       
                        <Button variant="primary" type="submit" onClick={(e) => handleUpdate(e)}>
                            Update
                        </Button>
                    </Form>
                </Col>

            </Row>
        </div>    

        </div>
    </div>
    )
}

export default Edit