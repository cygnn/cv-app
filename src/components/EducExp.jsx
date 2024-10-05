import SaveEditBtn from "./SaveEditBtn";
import { useState } from "react";

export default function EducExp({ educExpData, setEducExpData, index }) {
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
            </form>
        </>
    );
}