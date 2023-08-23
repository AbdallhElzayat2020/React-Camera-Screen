// import React, { useEffect, useState } from 'react';
// import SideBar from './sideBar';
// import Input from './input';
// import UploadImg from './uploadImg';
// import Button from './button';
// // import { AddImg } from './Functions';


// function Preview(props) {
//     const [Content, setContent] = useState("");
//     const [Title, setTitle] = useState(Content || "")
//     const [LengthSections, setLengthSections] = useState(0)
//     const [Sections, setSections] = useState([])
//     const [active, setActive] = useState(0)
//     const [LengthImg, setLengthImg] = useState([])
//     const [Imgs, setImgs] = useState(null)
//     const [Text, setText] = useState("")
//     const [Details, setDetails] = useState([])
//     const [Show, setShow] = useState([]);


//     function AddElemnt(e) {
//         if (e == 'img') {
//             setDetails([...Details, { id: Math.random() * 56141894, elemnt: e, section: active, img: Imgs }])
//         } else if (e == 'text' || e == 'video' || e == 'quiz') {
//             setDetails([...Details, { id: Math.random() * 56141894, elemnt: e, section: active, Text: Text }])
//             console.log(Details)
//         }
//     }
//     useEffect(() => {
//         console.log(Imgs)
//     }, [Imgs])

//     const DeleteImg = (idToDelete) => {
//         const updatedLengthImg = Details.filter((img) => img.id !== idToDelete);
//         setDetails(updatedLengthImg);
//     };

//     function DeleteSections() {
//         const updatedSections = Sections.filter((section, index) => index !== active);
//         const updatedDetails = Details.filter((detail) => detail.section !== active);

//         setSections(updatedSections);
//         setDetails(updatedDetails);

//         // Update active section if needed
//         if (active >= updatedSections.length) {
//             setActive(updatedSections.length - 1);
//         }
//     }

//     if (LengthSections < 1) {
//         return (
//             <div className='Preview'>
//                 <div>
//                     <SideBar
//                         content={Content}
//                         setcontent={setContent}
//                         active={active}
//                         LengthSections={LengthSections}
//                         setLengthSections={setLengthSections}
//                         setActive={setActive}
//                         setTitleSection={setTitle}
//                         TitleSection={Title}
//                         Sections={Sections}
//                         setSections={setSections}
//                     />
//                 </div>
//                 <div className='view'>
//                     <div>
//                         <h2>New Board</h2>
//                         <h5>Add New Section</h5>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className='Preview'>
//             <div>
//                 <SideBar
//                     content={Content}
//                     setcontent={setContent}
//                     active={active}
//                     LengthSections={LengthSections}
//                     setLengthSections={setLengthSections}
//                     setActive={setActive}
//                     setTitleSection={setTitle}
//                     TitleSection={Title}
//                     Sections={Sections}
//                     setSections={setSections}
//                 />
//             </div>
//             <div className='view'>
//                 {/* Change Title Section  */}
//                 <div id='titleSection'>
//                     <lable>Title Section {LengthSections}</lable>
//                     <Input placeholder='Title' value={Title} Change={(e) => { setTitle(e.target.value) }} />
//                     <Button title='Delete Section' color='bg-danger text-white' onClick={DeleteSections}></Button>
//                 </div>

//                 <div className='UploadImg'>
//                     {Details.map((details, i) => {
//                         if (details.section == active) {
//                             return (
//                                 <div className='IMGS' key={details.id}>
//                                     <button id='btn' onClick={() => DeleteImg(details.id)}>
//                                         <i className="fa-solid fa-trash fa-beat-fade"></i>
//                                     </button>
//                                     {details.elemnt == "img" ? <UploadImg src={details.show} imgs={Imgs} setImgs={setImgs} Details={Details} setDetails={setDetails} lengthElemnt={i} /> : ''}

//                                     {details.elemnt == "text" ? <Input placeholder="Enter Text" value={details.Text} Details={Details} setDetails={setDetails} lengthElemnt={i} /> : ""}

//                                     {details.elemnt == "video" ? <Input placeholder="Enter Url Video" value={details.Text} Details={Details} setDetails={setDetails} lengthElemnt={i} /> : ""}

//                                     {details.elemnt == "quiz" ? <Input placeholder="Enter Quiz Link " value={details.Text} Details={Details} setDetails={setDetails} lengthElemnt={i} /> : ""}


//                                 </div>
//                             )
//                         }
//                     })}

//                 </div>
//                 <div className='BTNS'>
//                     <Button title='Add img' onClick={() => { AddElemnt("img") }} />
//                     <Button title='Add Text' onClick={() => { AddElemnt('text') }} />
//                     <Button title='Add Video' onClick={() => { AddElemnt('video') }} />
//                     <Button title='Add quiz' onClick={() => { AddElemnt('quiz') }} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Preview;