import { useState } from "react";
import SaveEditBtn from "./SaveEditBtn";

export default function GenInfo({genInfoData, setGenInfoData}){
    const [newGenInfoData, setNewGenInfoData] = useState({
        name: '',
        email: '',
        num: '',
        location: ''
    }) //FOR LOCAL USE
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

    function handleLocationChange(e){
        setNewGenInfoData({...newGenInfoData, location: (e.target.value)})
    }
    return (
        <>
            <form action="">
                <label> 
                    <p>Name</p>
                    <input type="text" readOnly={!isEditing} placeholder="Enter first and last name" id="name" value={newGenInfoData.name} onChange={handleNameChange}/> 
                </label>
                <label htmlFor="">
                    <p>Email</p>
                    <input type='email' readOnly={!isEditing} placeholder="Enter email" id='email'value={newGenInfoData.email} onChange={handleEmailChange}/>
                </label>
                <label htmlFor="">
                    <p>Phone Number</p>
                    <input type='number' readOnly={!isEditing} placeholder="Enter phone number" id='num' value={newGenInfoData.num} onChange={handleNumChange}/>
                </label>
                <label htmlFor="">
                    <p>Address</p>
                    <input type="text" readOnly={!isEditing} placeholder="City, Country" id='loc' value={newGenInfoData.location} onChange={handleLocationChange}/>
                </label>
                <SaveEditBtn
                    componentName={'info'} //To identify which component is accessing the save edit component
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