import React, { useRef, useState } from 'react';
import {toast} from 'react-toastify'


function UploadImg(props){
    const FileRef = useRef();
    const [Loding , setLoding] = useState(true);
    const [Show , setShow] = useState(null);
    const {
        src,
        alt,
        style,
        deleteImg,
        setDeleteImg,
        setImgs,
        setShowImgs,
        Imgs,
        Details,
        setDetails,
        lengthElemnt
    } = props;
    const UploadImg = (e)=>{
        e.preventDefault();
        console.log(e.target.files[0])
       
        try{
            if(e.target.files[0].type === "image/jpeg" || e.target.files[0].type === "image/png" ||e.target.files[0].type === "image/gif"){
                if(e.target.files[0] && e.target.files[0].size < 1361782){
                    const reader = new FileReader();
                    new Promise(()=>{
                       reader.readAsDataURL(e.target.files[0]);
                       reader.onprogress = ()=>{
                           setLoding(true)
                       }
                       reader.onloadend = ()=>{
                            setDetails([...Details , Details[lengthElemnt].show = reader.result , Details[lengthElemnt].img = e.target.files[0] ])
                            setImgs(null)
                            setShowImgs(reader.result)
                            setShow(reader.result)
                           setLoding(false)
                       }
                    //    setShow(reader)
                   })
               }else if(e.target.files[0].size > 1361782){
                   toast.error("mbاكبر مساحه هي 1.5")
               }
            }else{
                toast.error("gif | png | jpeg  صيغ الصور المسموحه ")
                setImgs(null)
                setShow(null)
            }
         
        }catch(err){
            console.log(err);
        }
       
    }
    const SelectImg = ()=>{
        FileRef.current.click();
    }
  
    return(
        <div className='uploadImg'>
            
            <img onClick={SelectImg} onError={()=>{setShow("../../images/uploadImg.png")}} src={ Show || src || "../../images/uploadImg.png"} alt={alt} style={style}/>
            <input type='file' ref={FileRef} onChange={UploadImg} style={{display:"none"}}/>
        </div>
    )
}

export default UploadImg;