import { useState } from "react";

export default function SaveEditBtn({onSave, onEdit, data, prevData, loadPreData,isEditing}){
    const [count, setCount] = useState(0)
    const [showButton, setShowButton] = useState(false)
    let cancel = 'Edit'
    if(count >= 1){
        cancel = isEditing ? 'Cancel' : 'Edit'
    }
    
    function handleSave(){
        if(onSave){
            onSave(data)
            onEdit(!isEditing)
            setShowButton(true)
        }
    }

    function handleEdit(){
        onEdit(!isEditing);
        //I mutated state here IDK
        loadPreData(prevData);
        setCount(count + 1)
        
        
    }
    return(
        <div>
            {/* Attach both handlers here */}
            <button type="button" onClick={handleSave}>Save</button> 
            {showButton && <button type="button" onClick={handleEdit}>{cancel}</button>}
        </div>
    )
}