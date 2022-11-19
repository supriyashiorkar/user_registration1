import { useState } from "react";
import Table from 'react-bootstrap/Table';

function Registration() {
    const [name,setName]=useState()
    const [mobno,setMobno]=useState()
    const [email,setEmail]=useState()
    const [pwd,setPwd]=useState()
    const [dob,setDob]=useState()
    const [add,setAdd]=useState()
    const [pcity,setPcity]=useState()
    const [city,setCity]=useState()
    const [sel,setSel]=useState()
    const [data,setData]=useState([])
    function submitForm(){
data.push({name:name,mobno:mobno,email:email,pwd:pwd,city:city})
setData([...data])
    }
    return (
        <div>
            <h1 style={{ color: "red" }}>Registration Page</h1><br />

            Enter Name : <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/><br />
            Enter Mobile No : <input type="text" placeholder="Enter Mobile No" onChange={(e)=>setMobno(e.target.value)}/><br />
            Enter Email : <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/><br />
            Enter Password : <input type="password" placeholder="Enter Password" onChange={(e)=>setPwd(e.target.value)}/><br />
            DoB : <input type="Date" onChange={(e)=>setDob(e.target.value)}/><br /><br />
            Enter Address : <input type="text" placeholder="Enter Address" onChange={(e)=>setAdd(e.target.value)}/><br />
            Enter Pincode : <input type="text" placeholder="Enter Pincode" onChange={(e)=>setPcity(e.target.value)}/><br />
            City : <input type="text" placeholder="Enter City" onChange={(e)=>setCity(e.target.value)}/><br />
           States :  <select onChange={(varsel)=>setSel(varsel.target.value)}>
                <option>Maharashtra</option>
                <option>Gujrat</option>
                <option>Panjab</option>
                <option>Rajsthan</option>
                <option>Madhya Pradesh</option>
                <option>Kerala</option>
            </select><br />
            Gender : <input type="radio" name='gender' value='Male' /> Male
            <input type="radio" name='gender' value='Female' /> Female
            <input type="radio" name='gender' value='Other' /> Other<br />
            Hobbies : <input type="checkbox" /> Singing<br />
            <input type="checkbox" /> Dancing<br />
            <input type="checkbox" /> Painting<br />
            File : <input type="file" name="file" /> <br /><br />
           HSC : <input type="file" name="file" /> <br /><br />
           Graduation : <input type="file" name="file" /> <br /><br />
            <button onClick={()=>submitForm()}>Registration</button><br />
            Data : {JSON.stringify(data)}<br /><br />
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Mobile No</th>
          <th>Password</th>
          <th>city</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
            {
                data.map((val,i)=>{
                    return (
                      
                             <tr id="i">
          <td>{val.name}</td>
          <td>{val.mobno}</td>
          <td>{val.pwd}</td>
          <td>{val.city}</td>
          <td> {val.email}</td>
        </tr>
                          
                      
                    )
                })
            }
             </tbody>
    </Table>
        </div>

    )
}
export default Registration;