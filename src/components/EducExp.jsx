import SaveEditBtn from "./SaveEditBtn";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function EducExp({ educExpData, setEducExpData, index, educComponent, setEducComponent }) {
    const [newEducExpData, setNewEducExpData] = useState({
        id: index,
        name: '',
        course: '',
        numStart: '',
        numEnd: ''
    });

    const [isEditing, setIsEditing] = useState(true);

    function handleInputChange(e) {
        const { name, value } = e.target;
        setNewEducExpData(prev => ({ ...prev, [name]: value, id: index }));
    }

    function handleDelete(e){
        e.preventDefault()
        const updatedData = educExpData.filter((obj) => obj.id !== index)
        const updatedForm = educComponent.filter((obj) => obj.id !== index)
        setEducExpData(updatedData)
        setEducComponent(updatedForm)
    }

    return (
        <>
            <form action="">
                <label>
                    <p>School / University</p>
                    <input
                        type="text"
                        readOnly={!isEditing}
                        name="name"
                        placeholder="Enter school / university"
                        value={newEducExpData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <p>Field of Study / Degree</p>
                    <input
                        type="text"
                        readOnly={!isEditing}
                        name="course"
                        placeholder="Enter field of study / degree"
                        value={newEducExpData.course}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <p>Start Date</p>
                    <input
                        type='month'
                        readOnly={!isEditing}
                        name="numStart"
                        value={newEducExpData.numStart}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <p>End Date</p>
                    <input
                        type="month"
                        readOnly={!isEditing}
                        name="numEnd"
                        value={newEducExpData.numEnd}
                        onChange={handleInputChange}
                    />
                </label>
                <div className="buttons">
                    <button onClick={handleDelete} className="delete"> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                    <SaveEditBtn
                        componentName='educ'
                        onSave={setEducExpData}
                        onEdit={setIsEditing}
                        data={newEducExpData}
                        prevData={educExpData}
                        loadPreData={setNewEducExpData}
                        isEditing={isEditing}
                        index={index}
                />
                </div>
            </form>
        </>
    );
}