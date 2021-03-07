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
  const [error,setError]=useState(false)
  const getListOfUsers=async()=>{
      try {
        let r=await fetch(url)
        let users=await r.json()
        if(users.length==0){
            setError(true)
        }else{
            setUsers(users)
        }
       
      } catch (error) {
          setError(true)
      }
     
  }
  useEffect(()=>{
    getListOfUsers()
  },[])
    return(
        <section className="usersContainer">
            <ul>
                <h1>List of users</h1>
                {error ? <p>There is something wrong. There should be a list of users here ,
                    if not please make sure the server is running at posrt 5000 in your local machine.
                    If you are trying to run the application in docker then make sure the docker-compose is up .</p>:""}
                {users.map(user=>(
                <li key={user.id} className="">
                    <h4>{user.email}</h4>
                    <Link to={`/${user.id}/details`} className="btn btn-info shadow-sm" data-testid="getDetailsBtnTestId" id="getDetailBtn">Get Details</Link>
                </li>      
                ))}
            </ul>
        </section>
    )
}
export default UsersInfo