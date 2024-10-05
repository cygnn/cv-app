import SaveEditBtn from "./SaveEditBtn";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function WorkExp({workExpData, setWorkExpData, index, workComponent, setWorkComponent}){
    const [newWorkExpData, setNewWorkExpData] = useState({
        id: index,
        name: '',
        numStart: '',
        numEnd: '',
        position: '',
        description: ''
    }) //FOR LOCAL USE
    const [isEditing, setIsEditing] = useState(true) //FOR LOCAL USE

    function handleInputChange(e) {
        const { name, value } = e.target;
        setNewWorkExpData(prev => ({ ...prev, [name]: value, id: index }));
    }

    function handleDelete(e){
        e.preventDefault();
        const updatedData = workExpData.filter((obj) => obj.id !== index)
        const updatedForm = workComponent.filter((obj) => obj.id !== index)
        setWorkExpData(updatedData)
        setWorkComponent(updatedForm)
    }

    return(
        <>
            <form action="">
                <label>
                    <p>Company Name</p>
                    <input 
                        type="text" 
                        readOnly={!isEditing} 
                        value={newWorkExpData.name} 
                        onChange={handleInputChange} 
                        name='name' 
                        placeholder="Company Name" 
                    />
                </label>
                <label>
                    <p>Start Date</p>
                    <input 
                        type="month" 
                        readOnly={!isEditing} 
                        value={newWorkExpData.numStart} 
                        onChange={handleInputChange} 
                        name='numStart'
                    />
                </label>
                <label>
                    <p>End Date</p>
                    <input 
                        type="month" 
                        readOnly={!isEditing} 
                        value={newWorkExpData.numEnd} 
                        onChange={handleInputChange} 
                        name='numEnd'
                    />
                </label>
                <label>
                    <p>Position</p>
                    <input 
                        type="text" 
                        readOnly={!isEditing} 
                        value={newWorkExpData.position} 
                        onChange={handleInputChange} 
                        name='position' 
                        placeholder="Position" 
                    />
                </label>
                <label>
                    <p>Description</p>
                    <textarea name="description" rows={5} cols={40} value={newWorkExpData.description} onChange={handleInputChange}></textarea>
                </label>
                <div className="buttons">
                    {!isEditing && <button onClick={handleDelete} className="delete"> <FontAwesomeIcon icon={faTrash} />Delete</button>}
                    <SaveEditBtn 
                        componentName={'work'} //To identify which component is accessing the save edit component
                        onSave={setWorkExpData}
                        onEdit={setIsEditing}
                        data={newWorkExpData}
                        prevData={workExpData}
                        loadPreData={setNewWorkExpData}
                        isEditing={isEditing}
                        index={index}
                    />
                </div>
            </form>
        </>
    )
}