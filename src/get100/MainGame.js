import UserCard from "./UserCard"

const MainGame = ({ users, updateUser, deleteUser }) => {

    return <div className="users">
        {users.map(user =><UserCard deleteUser={deleteUser} updateUser={updateUser} user={user} />)}
    </div>
}
export default MainGame