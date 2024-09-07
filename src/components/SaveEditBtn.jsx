export default function SaveEditBtn({onSave, onEdit, data, prevData, loadPreData,isEditing}){
    function handleSave(){
        if(onSave){
            onSave(data)
            onEdit(!isEditing)
        }
    }

    function handleEdit(){
        onEdit(!isEditing);
        //I mutated state here IDK
        loadPreData(prevData);
        
    }
    return(
        <div>
            {/* Attach both handlers here */}
            <button type="button" onClick={handleSave}>Save</button> 
            <button type="button" onClick={handleEdit}>Edit</button>
        </div>
    )
}