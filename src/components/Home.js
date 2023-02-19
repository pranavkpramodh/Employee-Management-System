import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaUserTimes, FaUserPlus } from "react-icons/fa";


function Home() {
    const history = useNavigate()//it is hook
    const handleDelete = (id) => {
        let index = Employee.map(item => item.id).indexOf(id)
        Employee.splice( index, 1) 
        console.log(Employee);
        history('/')//refresh
    }

    const handleEdit = (id, empName, age, designation, salary) => {
        localStorage.setItem('id', id)
        localStorage.setItem('empName', empName)
        localStorage.setItem('age', age)
        localStorage.setItem('designation', designation)
        localStorage.setItem('salary', salary)
        
    }

  return (
    // Empty Fragment
<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div>
        <div style={{maxWidth:'1000px', width:'100%'}}>
            <h1 className='text-primary text-center p-3'>Employee Management System</h1>
            <p className='p-4  text-center '>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management.</p>
        </div>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h3 className='my-5 me-3 text-success'>List of Employee</h3>
        <Link to={'/add'}>
        <Button variant='success'>Add <FaUserPlus/></Button>
        </Link>
        </div>

        <Table striped bordered hover variant="dark" style={{maxWidth:'1000px', width:'100%'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Employee Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        Employee && Employee.length>0?
        Employee.map((item) => (
            <tr>
                <td>{item.id}</td>
                <td>{item.empName}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>
                    <Link to={'edit'}>
                    <Button onClick={ () => handleEdit(item.id, item.empName, item.age, item.designation, item.salary) } variant="light"><FaEdit/></Button>{' '}
                    </Link>
                    <Button onClick={ () => handleDelete(item.id) } variant="danger"><FaUserTimes/></Button>{' '}
                </td>
            </tr>
        )):<h5 className='text-primary'>No data available</h5>
      }

      </tbody>
    </Table>
    </div>
    </div> 
  )
}

export default Home