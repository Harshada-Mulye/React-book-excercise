import React,{useState} from 'react'
interface Props{
	type:string
	name:string
}

const Spoiler = (props:Props) => {
	
	const[warning,setwarning]=useState("spoiler warning")
	let message=props.type
	console.log(message)
	return(
<div>
  {props.type}
	{props.name}
<br/>
	<button onClick={()=>setwarning(props.type)}>{warning}</button>
</div>
	)
}
export default Spoiler