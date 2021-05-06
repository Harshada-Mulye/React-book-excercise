  
import React,{useState} from 'react'
const Books = () => {
	var trimmedString=""
	let trimIndex=200;
	const[pageNum,setpageNum]=useState(1)

	const[prevValue,setprevValue]=useState(0)
	const[nextValue,setnextValue]=useState(trimIndex)
	const book="From fairest creatures we desire increase,That thereby beauty’s rose might never die But as the riper should by time decease,His tender heir might bear his memory:But thou contracted to thine own bright eyes,Feed’st thy light’s flame with self-substantial fuel,Making a famine where abundance lies,Thy self thy foe, to thy sweet self too cruel:Thou that art now the world’s fresh ornament,And only herald to the gaudy spring,Within thine own bud buriest thy content,And, tender churl, mak’st waste in niggarding: Pity the world, or else this glutton be, To eat the world’s due, by the grave and thee.From fairest creatures we desire increase,That thereby beauty’s rose might never die But as the riper should by time decease,His tender heir might bear his memory:But thou contracted to thine own bright eyes,Feed’st thy light’s flame with self-substantial fuel,Making a famine where abundance lies,Thy self thy foe, to thy sweet self too cruel:Thou that art now the world’s fresh ornament,And only herald to the gaudy spring,Within thine own bud buriest thy content,And, tender churl, mak’st waste in niggarding: Pity the world, or else this glutton be, To eat the world’s due, by the grave and thee.From fairest creatures we desire increase,That thereby beauty’s rose might never die But as the riper should by time decease,His tender heir might bear his memory:But thou contracted to thine own bright eyes,Feed’st thy light’s flame with self-substantial fuel,Making a famine where abundance lies,Thy self thy foe, to thy sweet self too cruel:Thou that art now the world’s fresh ornament,And only herald to the gaudy spring,Within thine own bud buriest thy content,And, tender churl, mak’st waste in niggarding: Pity the world, or else this glutton be, To eat the world’s due, by the grave and thee."

	const Next=()=>{
		//console.log(setnextValue(prevcount=>prevcount+200))
		setnextValue(prevcount=>prevcount+200)
		setprevValue(prevcount=>prevcount+200)
		}
		const Prev=()=>{
		
			setnextValue(prevcount=>prevcount-200)
			setprevValue(prevcount=>prevcount-200)
			}
		
			trimmedString=book.substring(prevValue,nextValue)
			trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
			 trimIndex=trimmedString.length
			console.log(trimIndex)
    return(
		<div>
			
	<p>
        {trimmedString}
	</p>
     <button  onClick={Next}>Next</button>
	 <button onClick={Prev}>Previous</button>		
			
				
		
</div>
	)
}

export default Books