import { useState } from "react";
import EducExp from "./EducExp";
import GenInfo from "./GenInfo";
import WorkExp from "./WorkExp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function InputSection({genInfoData, setGenInfoData, educExpData, setEducExpData, workExpData, setWorkExpData}){
    const [educComponent, setEducComponent] = useState([])
    const [workComponent, setWorkComponent] = useState([])

    const handleAdd = () => {
        setEducComponent([...educComponent, {}])
    }
    
    const handleExp = () => {
        setWorkComponent([...workComponent, {}])
    }

    return (
        <div className="input-section">
            <div className="gen-info">
                <h2 className="subtitle input">Personal Details</h2>
                <GenInfo 
                    genInfoData = {genInfoData}
                    setGenInfoData = {setGenInfoData}
                />
            </div>
            <div className="work-info">
                <h2 className="subtitle input">Work Experience</h2>
                {workComponent.map((_, index) => (
                    <WorkExp 
                        key={index}
                        index={index}
                        workExpData = {workExpData}
                        setWorkExpData = {setWorkExpData}
                    />
                ))}
                <button onClick={handleExp}><FontAwesomeIcon icon={faPlus} /> Experience</button>
            </div>
            <div className="educ-info">
                {educComponent.map((_, index) => (
                    <EducExp 
                        key={index}
                        index={index}
                        educExpData = {educExpData}
                        setEducExpData={setEducExpData}
                    />
                ))}
                <button onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /> Education</button>
            </div>
        </div>
    )
}