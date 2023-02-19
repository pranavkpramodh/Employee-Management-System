import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Employee from './Employee';
import uuid from 'react-uuid';


function Add() {
    
    
    const [ id, setId] = useState();
    const [ empName, setEmpName] = useState('');
    const [ age, setAge] = useState();
    const [ designation, setDesignation] = useState('');
    const [ salary, setSalary] = useState();
    

    const history = useNavigate();

    const handleAdd = (e) => {
        e.preventDefault();

        let ids = uuid();
        console.log(ids);
        let uniqueId = ids.slice(0, 8)
        console.log(uniqueId);

        Employee.push({
            id: uniqueId,
            empName,
            age,
            designation,
            salary
        })
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
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name"   onChange = {(e) => setEmpName(e.target.value) } required/>
                          
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Age"  onChange = {(e) => setAge(e.target.value) } required />
                          
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Designation"   onChange = {(e) => setDesignation(e.target.value) } required/>
                          
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Salary"   onChange = {(e) => setSalary(e.target.value) } required/>
                          
                        </Form.Group>

                       
                        <Button variant="primary" type="submit" onClick={(e) => handleAdd(e)}>
                            Add
                        </Button>
                    </Form>
                </Col>

            </Row>
        </div>    

        </div>
    </div> 
     )
}

export default Add