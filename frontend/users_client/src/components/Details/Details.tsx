import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { User } from '../Users/UsersInfo';
import './Details.css'
export interface DetailsProps extends RouteComponentProps<{id:string;}>{}

const Details:React.FC<DetailsProps>=({history,match:{params:{id}}})=>{
  const [user,setUser]=useState<User>({
    id:0,
    first_name:'',
    last_name:'',
    email:'',
    gender:'',
    ip_address:''
  })
  const getUserDetails=async()=>{
      let r=await fetch(`http://localhost:5000/user/${id}`);
      let user=await r.json();
      setUser(user)
  }
  useEffect(()=>{
    getUserDetails()
  },[id])
    return(
        <div className="detailsContainer">
           <section className="row my-5">
            <article className="col-md-12">
                    <h4 className="card-title">
                      Email: {user.email}
                    </h4>
                    <div>
                            <span><strong>First Name :</strong>{user.first_name}</span>
                            <span><strong>Last Name :</strong>{user.last_name}</span>
                            <span><strong>Gender :</strong>{user.gender}</span>
                            <span><strong>Ip address :</strong>{user.ip_address}</span>
                    </div>
                   <button onClick={()=>history.goBack()} className="btn btn-primary btn-block shadow mx-auto">Go back</button>
            </article>
        </section>
        </div>
    )
}

export default Details