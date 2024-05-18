import { useState } from "react"

const AddUser = ({ addUser }) => {
    const [name, setName] = useState("")
    return <div style={{ marginTop: "50px" }}>
        Enter the user name<br />
        <input style={{ height: "30px", border: "solid 1px indianred" }} onChange={(e) => { setName(e.target.value) }} type="text" />
        <button style={{ backgroundColor: "indianred", border: "none", height: "33px" }} onClick={() => { addUser(name) }}>add user</button>
    </div>


}
export default AddUser