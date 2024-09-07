import SaveEditBtn from "./SaveEditBtn"
export default function EducExp(){
    return(
        <>
            <form action="">
                <div>
                    <input type="text" placeholder="School Name"/>
                </div>
                <div>
                    <input type="text" placeholder="Course"/>
                </div>
                <div>
                    Start
                    <input type='month'/>
                </div>
                <div>
                    End
                    <input type="month" />
                </div>
                <SaveEditBtn />
            </form>
        </>
    )
}