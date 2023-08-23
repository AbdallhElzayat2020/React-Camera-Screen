import React, { useState } from 'react';


function Input(props){
    const [Text , setText] = useState("")
    const [Video , setVideo] = useState("")
    const {
        value,
        style,
        Change,
        placeholder,
        Details,
        setDetails,
        lengthElemnt
    } = props;
    function ChangeText(e){
        setText(e.target.value)
        setDetails([...Details , Details[lengthElemnt].Text = e.target.value ])
        if(Text.includes("https:")){
            setVideo(video)
        }
    }
   if(Change){
    return(
        <div className='Input'>
            <input  type='text' value={value} onChange={Change} placeholder={placeholder}></input>
        </div>
    )
   }else{
    return(
        <div className='Input'>
            <input  type='text' value={value} onChange={(e)=>{ ChangeText(e)}} placeholder={placeholder}></input>
        </div>
    )
   }
}


export default Input;