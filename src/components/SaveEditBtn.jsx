import { useState } from "react";

export default function SaveEditBtn({ componentName, onSave, onEdit, data, prevData, loadPreData, isEditing, index }) {
    const [count, setCount] = useState(0);
    const [showButton, setShowButton] = useState(false);
    let cancel = count >= 1 ? (isEditing ? 'Cancel' : 'Edit') : 'Edit';

    function handleSave() {
        if (componentName === 'educ' || componentName === 'work') {
            const found = prevData.find((obj) => obj.id === data.id)
            if (found === undefined) {
                onSave([...prevData, data]); // Directly save the new data if not found 
                console.log('prev data is null');
            } else {
                const updatedData = prevData.map((item) => //THIS IS FOR EDIT
                    item.id === index ? { ...item, ...data } : item
                );
                console.log(index);
                console.log(data);
                console.log(prevData);
                console.log(updatedData);
                onSave(updatedData); // Use updatedData to update state
            }
            onEdit(!isEditing);
            setShowButton(true);
        } else {
            onSave(data);
            onEdit(!isEditing);
            setShowButton(true);
        }
    }

    function handleEdit() {
        onEdit(!isEditing);
        if(componentName !== 'info'){
            loadPreData(prevData[index]); // Load previous data for the specified index
        }
        else{
            loadPreData(prevData)
        }
        setCount(count + 1);
        setShowButton(true);
    }

    return (
        <div className="buttons">
            <button className='save' type="button" onClick={handleSave}>Save</button>
            {showButton && <button type="button" onClick={handleEdit}>{cancel}</button>}
        </div>
    );
}