import SaveEditBtn from "./SaveEditBtn"
import { useState } from "react"
export default function EducExp({educExpData, setEducExpData}){
    const [newEducExpData, setNewEducExpData] = useState({}) //FOR LOCAL USE
    const [isEditing, setIsEditing] = useState(true) //FOR LOCAL USE

    function handleNameChange(e){
        setNewEducExpData({...newEducExpData, name: (e.target.value)})
    }

    function handleCourseChange(e){
        setNewEducExpData({...newEducExpData, course: (e.target.value)})
    }

    function handleStartChange(e){
        setNewEducExpData({...newEducExpData, numStart: (e.target.value)})
    }

    function handleEndChange(e){
        setNewEducExpData({...newEducExpData, numEnd: (e.target.value)})
    }

    return(
        <>
            <form action="">
                <div>
                    <input type="text" readOnly={!isEditing} placeholder="School Name" value={newEducExpData.name} onChange={handleNameChange}/>
                </div>
                <div>
                    <input type="text" readOnly={!isEditing} placeholder="Course" value={newEducExpData.course} onChange={handleCourseChange}/>
                </div>
                <div>
                    Start
                    <input type='month' readOnly={!isEditing} value={newEducExpData.numStart} onChange={handleStartChange}/>
                </div>
                <div>
                    End
                    <input type="month" readOnly={!isEditing} value={newEducExpData.numEnd} onChange={handleEndChange}/>
                </div>
                <SaveEditBtn 
                    onSave={setEducExpData}
                    onEdit={setIsEditing}
                    data={newEducExpData} //NEW DATA TO BE SAVED
                    prevData={educExpData} //SAVED DATA
                    loadPreData={setNewEducExpData} //LOAD PREVIOUS SAVED DATA INCASE OF CANCELING EDIT
                    isEditing={isEditing}
                />
            </form>
        </>
    )
}