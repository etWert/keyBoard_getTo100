const UserCard = ({ user, updateUser, deleteUser }) => {
    const plusOne = () => {
        let userEdit = { ...user, num: user.num + 1, steps: user.steps + 1, disabled: true }
        if (userEdit.num === 100)
            userEdit = { ...user, win: true }
        updateUser(userEdit)

    }
    const minusOne = () => {
        let userEdit = { ...user, num: user.num - 1, steps: user.steps + 1, disabled: true }
        if (userEdit.num === 100)
            userEdit = { ...user, win: true }
        updateUser(userEdit)

    }
    const multyTwo = () => {
        let userEdit = { ...user, num: user.num * 2, steps: user.steps + 1, disabled: true }
        if (userEdit.num === 100)
            userEdit = { ...user, win: true }
        updateUser(userEdit)

    }
    const devideTwo = () => {
        let userEdit = { ...user, num: user.num / 2, steps: user.steps + 1, disabled: true }
        if (userEdit.num === 100)
            userEdit = { ...user, win: true }
        updateUser(userEdit)
    }
    const leaveGame = () => {
        deleteUser(user)
    }
    //אם הוא השחקן התורן או שניצח יהיה בצבע לבו
    return <><div className="userCard" style={{ background: user.disabled && !user.win ? "rgb(200, 200, 200)" : "white", border: user.disabled && !user.win ? "none" : "solid 3px indianred" }}>
        <h2 style={{ marginBottom: "10px" }}>{user.name}</h2>
        <h2 className="user-num">{user.num}</h2>
        {/* להחליף לכוכב */}
        {user.win === true && <h4 style={{ margin: "0" }}>win!!!</h4>}
        {!user.win && <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <button style={{ backgroundColor: user.disabled ? " rgb(182, 182, 182)" : "gray" }} className="operation-btn" onClick={plusOne} disabled={user.disabled}>+1</button>
            <button style={{ backgroundColor: user.disabled ? " rgb(182, 182, 182)" : "gray" }} className="operation-btn" onClick={minusOne} disabled={user.disabled}>-1</button>
            <button style={{ backgroundColor: user.disabled ? " rgb(182, 182, 182)" : "gray" }} className="operation-btn" onClick={multyTwo} disabled={user.disabled}>*2</button>
            <button style={{ backgroundColor: user.disabled ? " rgb(182, 182, 182)" : "gray" }} className="operation-btn" onClick={devideTwo} disabled={user.disabled}>/2</button>
        </div>}
        <div style={{ display: "flex", height: "50px", alignItems: "center", gap: "35px" }}>
            <h4>steps:{user.steps}</h4>
            <button className="leave-btn" onClick={leaveGame}>leave</button>
        </div>
    </div>
    </>
}
export default UserCard