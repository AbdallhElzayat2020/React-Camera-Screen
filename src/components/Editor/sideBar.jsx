import React, { useEffect, useState } from 'react';





function SideBar(props){
    const {content , setcontent , TitleSection , setTitleSection , active , setActive , LengthSections ,setLengthSections , Sections , setSections} = props;
    const [sections , setSectionsSide] = useState([])
    useEffect(() => {
        if (Sections.length >= 1) {
            const updatedSections = [...Sections];
            updatedSections[active] = { ...updatedSections[active], title: TitleSection };
            setSections(updatedSections);
        }
    }, [TitleSection, active]);

    function AddSection(){
        const newSection = { title: "Default Tile", active: false, id: Math.random() * 59845158 };
        setSectionsSide([...sections , newSection])
        setSections([...Sections , newSection])

        setLengthSections(LengthSections+1)
    }
    function ShowSection(e){
        const selectedSection = Sections[e];
        setActive(e);
        setTitleSection(selectedSection.title);
        setcontent(selectedSection.title);

    }

    return(
        <div className='SideBar'>
            {Sections.map((section , i) =>{
                return(
                    <ul onClick={()=>{ShowSection(i)}}>
                        <li>{section.title}</li>
                    </ul>
                )
            })}

            <button onClick={AddSection}>Add section</button>
        </div>
    )
}

export default SideBar;