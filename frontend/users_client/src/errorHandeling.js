

function ErrorHandeling(){
    const [errormessage,setErrormessage]=useState("There is something wrong")
  return(
      <div>
         {errormessage}
      </div>
  )
}
export default ErrorHandeling