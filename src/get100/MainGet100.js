import { useState } from "react"
import AddUser from "./AddUser"
import MainGame from "./MainGame"
// import UserCard from "./UserCard"
const MainGet100 = () => {
    const [status, setStatus] = useState(1)
    const [users, setUsers] = useState([])
    const addUser = (name) => {
        const obj = {
            id: users.length + 1,
            name,
            steps: 0,
            num: Math.floor(Math.random() * 100),
            //ז"א שכעת לא תורו וכן נגדיר את לחצני הפעולות של משתמש זה כך כדי שלא יוכל ללחוץ כשלא תורו true אם הוא
            //כאשר מגדירים לכפתור disabled=true
            //לא ניתן ללחוץ עליו
            disabled: true,
            win: false,
            active: true
        }
        //setUsers(users.push(obj))
        setUsers([...users, obj])
    }

    const startGameClick = () => {
        //תחילת המשחק
        setStatus(2)
        const usersMap = users.map(user => {
            //עדכון תור השחקן הראשון
            return user.id === 1 ? { ...user, disabled: false } : user
        })
        setUsers(usersMap)

    }

    const updateUser = (user) => {
        //עדכון משתמש שסיים את תורו
        const usersUpdated = users.map(u => {
            //user:  המשתמש שצריך לעדכן
            //u:  users משתמש שקיים במערך ה
            if (u.id === user.id) {
                return user
            }
            else {
                return u
            }
        })
        queue(usersUpdated)
    }


    const deleteUser = (user) => {
        //הסרת המשתמש מרשימת המשתמשים
        const usersMap = users.filter(u => u.id !== user.id)
        setUsers(usersMap)
    }
    const newGame = () => {
        setUsers([])
        setStatus(1)
    }

    const queue = (usersUpdated) => {
        // קידום התור
        const usersMap = usersUpdated.map(u => {
            //אם יש רק שחקן אחד
            if (users.length === 1) {
                return { ...u, disabled: false }
            }
            //אם יש יותר משחקן אחד
            if (u.id === 1) {
                return { ...u, id: users.length }
            }
            //השחקן הבא בתור
            else if (u.id - 1 === 1) {
                return { ...u, id: u.id - 1, disabled: false }
            }
            else {
                return { ...u, id: u.id - 1 }
            }

        })
        setUsers(usersMap)
    }
    return <>
        <div className="three-btns">
            <button onClick={() => setStatus(1)}>add user</button>
            <button onClick={startGameClick}>start game</button>
            <button onClick={newGame}>new game</button>
        </div>
        {status === 1 && <AddUser addUser={addUser} />}
        {status === 2 && <MainGame deleteUser={deleteUser} updateUser={updateUser} users={users} />}
        {/* הצגת כל המשתמשים עם המספר שלהם */}
        <ul className="list-users-nums">
            {/* להוסיף בעיצוב :בהוספת משתמש באמצע מתחת תיבת הטקסט ובזמן המשחק בצד שמאל */}
            {users.map(u => <li>{u.name} <span>{u.num}</span></li>)}
        </ul>
        {/* רשימת המנצחים */}
        {status === 2 && <h1>Winners!</h1>}
        <ul>{users.map(u => { return u.win === true && <li>{u.name} <span>{u.steps}</span></li> })}</ul>
    </>
}

export default MainGet100