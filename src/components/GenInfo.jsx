import { useState } from "react";
import SaveEditBtn from "./SaveEditBtn";

export default function GenInfo({genInfoData, setGenInfoData}){
    const [newGenInfoData, setNewGenInfoData] = useState({}) //FOR LOCAL USE
    const [isEditing, setIsEditing] = useState(true) //FOR LOCAL USE


    function handleNameChange(e){
        setNewGenInfoData({...newGenInfoData, name: (e.target.value)})
    }

    function handleEmailChange(e){
        setNewGenInfoData({...newGenInfoData, email: (e.target.value)})
    }

    function handleNumChange(e){
        setNewGenInfoData({...newGenInfoData, num: (e.target.value)})
    }

    return (
        <>
            <form action="">
                <div>
                    <input type="text" readOnly={!isEditing} placeholder="Name" id="name" value={newGenInfoData.name} onChange={handleNameChange}/> 
                </div>
                <div>
                    <input type='email' readOnly={!isEditing} placeholder="Email" id='email'value={newGenInfoData.email} onChange={handleEmailChange}/>
                </div>
                <div>  
                    <input type='number' readOnly={!isEditing} placeholder="Mobile Number" id='num' value={newGenInfoData.num} onChange={handleNumChange}/>
                </div>
                <SaveEditBtn 
                    onSave = {setGenInfoData}
                    onEdit = {setIsEditing}
                    data = {newGenInfoData} //NEW DATA TO BE SAVED
                    prevData = {genInfoData} //SAVED DATA
                    loadPreData = {setNewGenInfoData} //LOAD PREVIOUS SAVED DATA INCASE OF CANCELING EDIT
                    isEditing = {isEditing}
                />
            </form>
        </>
    )
}