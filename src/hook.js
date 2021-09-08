import { useState } from 'react';

function UserList(list_user) {
    const [list_name_user, setList_name_user] = useState(list_user)
    const [name, setName] = useState('')
    const changeNewName = (e) => {
        setName(e.target.value)
    }
    const addName = () => {
        let data = [].concat(list_name_user)
        data = [...data, name]
        setList_name_user(data)
        setName("")
    }

    return [name, changeNewName, addName, list_name_user]
}

export default UserList;
