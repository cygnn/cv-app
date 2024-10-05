import EducComp from "./EducComp"
import WorkComp from "./WorkComp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
export default function OutputSection({genInfoData, educExpData, workExpData}){
    
    return(
        <div className="output-section">
            <div className="personal-info">
                <h1 className="name">{genInfoData.name} </h1>
                <div><FontAwesomeIcon icon={faEnvelope} /> {genInfoData.email} </div>
                <div><FontAwesomeIcon icon={faPhone} /> {genInfoData.num} </div>
                <div><FontAwesomeIcon icon={faLocationDot} /> {genInfoData.location} </div>
            </div>
            <div className="experience">{/*Need to make another component here */}
                <h2 className="subtitle">Experience</h2>
                <WorkComp
                    workExpData={workExpData}
                />
                
            </div>
            <div className="education">{/*Need to make another component here */}
                <h2 className="subtitle">Education</h2>
                <EducComp
                    educExpData={educExpData}
                />
            </div>
        </div>
    )
}