export default function OutputSection({genInfoData, educExpData, workExpData}){
    
    return(
        <div className="output-section">
            <div>{genInfoData.name}</div>
            <div>{genInfoData.email}</div>
            <div>{genInfoData.num}</div>
            <div>{educExpData.name}</div>
            <div>{educExpData.course}</div>
            <div>{educExpData.numStart}</div>
            <div>{educExpData.numEnd}</div>
            <div>{workExpData.name}</div>
            <div>{workExpData.numStart}</div>
            <div>{workExpData.numEnd}</div>
            <div>{workExpData.position}</div>
            {console.log(educExpData)}
            {console.log(workExpData)}
        </div>
    )
}