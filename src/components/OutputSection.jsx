export default function OutputSection({genInfoData, educExpData, workExpData}){
    
    return(
        <div className="output-section">
            <div className="personal-info">
                <h1 className="name">{genInfoData.name}</h1>
                <div>Email: {genInfoData.email}</div>
                <div>Mobile Number: {genInfoData.num}</div>
            </div>
            <div className="experience">
                <h2 className="subtitle">Experience</h2>
                <div className="grid">
                    <div className="date">
                        <div>{workExpData.numStart} - {workExpData.numEnd}</div>
                    </div>
                    <div className="info">
                        <div className="major">{workExpData.position}</div>
                        <div className="minor">{workExpData.name}</div>
                    </div>
                </div>
                
            </div>
            <div className="education">
                <h2 className="subtitle">Education</h2>
                <div className="grid">
                    <div className="date">
                        <div>{educExpData.numStart} - {educExpData.numEnd}</div>
                    </div>
                    <div className="info">
                        <div className="major">{educExpData.name}</div>
                        <div className="minor">{educExpData.course}</div>
                    </div>
                </div>
                
                
            </div>
            
            {console.log(educExpData)}
            {console.log(workExpData)}
        </div>
    )
}