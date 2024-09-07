import SaveEditBtn from "./SaveEditBtn";

export default function WorkExp(){
    return(
        <>
            <form action="">
                <div>
                    <input type="text" placeholder="Company Name" />
                </div>
                <div>
                    Start
                    <input type="month" />
                </div>
                <div>
                    End
                    <input type="month" />
                </div>
                <div>
                    <input type="text" placeholder="Position" />
                </div>
                <div>
                    <input type="text" placeholder="Responsibilities" />
                </div>
                <SaveEditBtn />
            </form>
        </>
    )
}