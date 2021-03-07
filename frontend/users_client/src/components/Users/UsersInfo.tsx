import * as React from 'react';
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Users.css'
export interface User{
    id:number,
    first_name:string,
    last_name:string,
    email:string,
    gender:string,
    ip_address:string
   
};
let url:string="http://localhost:5000"
const UsersInfo:React.FC=(props)=>{
  const [users,setUsers]=useState<User[]>([]);
  const getListOfUsers=async()=>{
      let r=await fetch(url)
      let users=await r.json()
      setUsers(users)
  }
  useEffect(()=>{
    getListOfUsers()
  },[])
    return(
        <section className="usersContainer">
            <ul>
                <h1>List of users</h1>
                {users.map(user=>(
                <li key={user.id} className="">
                    <h3>{user.email}</h3>
                    <Link to={`/${user.id}/details`} className="btn btn-info shadow-sm" data-testid="getDetailsBtnTestId" id="getDetailBtn">Get Details</Link>
                </li>      
                ))}
            </ul>
        </section>
    )
}
export default UsersInfo