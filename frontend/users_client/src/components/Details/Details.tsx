import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { User } from '../Users/UsersInfo';
import './Details.css'
export interface DetailsProps extends RouteComponentProps<{id:string;}>{}
export interface ErrorBoundry{
  message:string;
}
let url:string="http://localhost:5000/user/"
const Details:React.FC<DetailsProps>=({history,match:{params:{id}}})=>{
  const [user,setUser]=useState<User>({
    id:0,
    first_name:'',
    last_name:'',
    email:'',
    gender:'',
    country:'',
    job_title:''
  });
  const [hasError, setHasError] = useState(false);
  useEffect(()=>{
    const getUserDetails=async()=>{
      try {
        let r=await fetch(url+id);
        let user=await r.json();
        if(user.length==0){
          setHasError(true)
        }else{
          setUser(user)
          setHasError(false)
        }
      } catch (error) {
        setHasError(true)
      }
    }
    getUserDetails()
  },[id])
    return(
        <div className="detailsContainer">
           <section className="row my-5">
             {hasError ? <p>There is something wrong</p>:""}
            <article className="col-md-12">
                    <h4 className="card-title">
                      Email: {user.email}
                    </h4>
                    <div>
                            <span><strong>First Name :</strong>{user.first_name}</span>
                            <span><strong>Last Name :</strong>{user.last_name}</span>
                            <span><strong>Gender :</strong>{user.gender}</span>
                            <span><strong>Country :</strong>{user.country}</span>
                            <span><strong>job_title :</strong>{user.job_title}</span>
                    </div>
                  
            </article>
            <button onClick={()=>history.goBack()} className="btn btn-primary btn-block shadow mx-auto">Go back</button>
        </section>
        </div>
    )
}

export default Details