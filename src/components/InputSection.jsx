import { useState } from "react";
import EducExp from "./EducExp";
import GenInfo from "./GenInfo";
import WorkExp from "./WorkExp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function InputSection({genInfoData, setGenInfoData, educExpData, setEducExpData, workExpData, setWorkExpData}){
    const [educComponent, setEducComponent] = useState([])
    const [workComponent, setWorkComponent] = useState([])
    const [toggleDropdown, setToggleDropdown] = useState(false)
    const [toggleDropdownEduc, setToggleDropdownEduc] = useState(false)

    const handleAdd = () => {
        setEducComponent([...educComponent, {id: educComponent.length}])
    }
    
    const handleExp = () => {
        setWorkComponent([...workComponent, {id: workComponent.length}])
    }

    const handleDropDown = () => {
        setToggleDropdown(prevState => !prevState);
    };

    const handleDropDownEduc = () => {
        setToggleDropdownEduc(!toggleDropdownEduc)
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
            <div className={`work-info ${toggleDropdown ? 'active' : 'inactive'}`}>
                <div className="header">
                    <h2 className="subtitle input">Work Experience</h2>
                    <button className='dropdown' onClick={handleDropDown}>{!toggleDropdown ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</button>
                </div>
                <div className="body">
                    {workComponent.map((_) => (
                        <WorkExp 
                            key={_.id}
                            index={_.id}
                            workExpData={workExpData}
                            setWorkExpData={setWorkExpData}
                            workComponent={workComponent}
                            setWorkComponent={setWorkComponent}
                        />
                    ))}
                    <button onClick={handleExp}>
                        <FontAwesomeIcon icon={faPlus} /> Experience
                    </button>
                </div>
            </div>
            <div className={`educ-info ${toggleDropdownEduc ? 'active': 'inactive'}`}>
                <div className="header">
                    <h2 className="subtitle input">Education</h2>
                    <button className="dropdown" onClick={handleDropDownEduc}>{!toggleDropdownEduc ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</button>
                </div>
                <div className="body">
                    {educComponent.map((_) => (
                        <EducExp 
                            key={_.id}
                            index={_.id}
                            educExpData = {educExpData}
                            setEducExpData={setEducExpData}
                            educComponent={educComponent}
                            setEducComponent={setEducComponent}
                        />
                    ))}
                <button onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /> Education</button>
                </div>
            </div>
        </div>
    )
}