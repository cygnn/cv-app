import SaveEditBtn from "./SaveEditBtn";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function WorkExp({workExpData, setWorkExpData}){
    const [newWorkExpData, setNewWorkExpData] = useState({}) //FOR LOCAL USE
    const [isEditing, setIsEditing] = useState(true) //FOR LOCAL USE

    function handleNameChange(e){
        setNewWorkExpData({...newWorkExpData, name: e.target.value})
    }

    function handleStartChange(e){
        setNewWorkExpData({...newWorkExpData, numStart: e.target.value})
    }

    function handleEndChange(e){
        setNewWorkExpData({...newWorkExpData, numEnd: e.target.value})
    }

    function handlePositionChange(e){
        setNewWorkExpData({...newWorkExpData, position: e.target.value})
    }



    return(
        <>
            <form action="">
                <div>
                    <input type="text" readOnly={!isEditing} value={newWorkExpData.name} onChange={handleNameChange} placeholder="Company Name" />
                </div>
                <div>
                    Start
                    <input type="month" readOnly={!isEditing} value={newWorkExpData.numStart} onChange={handleStartChange}/>
                </div>
                <div>
                    End
                    <input type="month" readOnly={!isEditing} value={newWorkExpData.numEnd} onChange={handleEndChange}/>
                </div>
                <div>
                    <input type="text" readOnly={!isEditing} value={newWorkExpData.position} onChange={handlePositionChange} placeholder="Position" />
                </div>
                {/* <div>
                    <input type="text" placeholder="Responsibilities" />
                </div> */}
                <SaveEditBtn 
                    onSave={setWorkExpData}
                    onEdit={setIsEditing}
                    data={newWorkExpData}
                    prevData={workExpData}
                    loadPreData={setNewWorkExpData}
                    isEditing={isEditing}
                />
            </form>
        </>
    )
}