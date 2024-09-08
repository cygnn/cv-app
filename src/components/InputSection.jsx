import EducExp from "./EducExp";
import GenInfo from "./GenInfo";
import WorkExp from "./WorkExp";

export default function InputSection({genInfoData, setGenInfoData, educExpData, setEducExpData, workExpData, setWorkExpData}){

    return (
        <div className="input-section">
            <GenInfo 
                genInfoData = {genInfoData}
                setGenInfoData = {setGenInfoData}
            />
            <EducExp 
                educExpData = {educExpData}
                setEducExpData = {setEducExpData}
            />    
            <WorkExp 
                workExpData = {workExpData}
                setWorkExpData = {setWorkExpData}
            />
        </div>
    )
}