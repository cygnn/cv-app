export default function EducComp({educExpData}){
    return(
        <>
            {educExpData.map((data, index) => 
                <div key ={index} className="grid">
                    <div className="date">
                        <div>{data.numStart} - {data.numEnd}</div>
                    </div>
                    <div className="info">
                        <div className="major">{data.name}</div>
                        <div className="minor">{data.course}</div>
                    </div>
                </div>
            )}
        </>
    )
}