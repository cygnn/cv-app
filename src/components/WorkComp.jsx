export default function WorkComp({workExpData}){
    return(
        <>
            {workExpData.map((data, index) =>
                <div key = {index} className="grid">
                    <div className="date">
                        <div>{data.numStart} - {data.numEnd}</div>
                    </div>
                    <div className="info">
                        <div className="major">{data.position}</div>
                        <div className="minor">{data.name}</div>
                        <div className="desc">{data.description}</div>
                    </div>
            </div>
            )}
        </>
    )
}