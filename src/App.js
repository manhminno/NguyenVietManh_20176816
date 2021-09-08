import logo from './logo.svg';
import './App.css';
import UserList from './hook'

function App() {
    const list_name_initial = ['huyen', 'huy', 'quang', 'nhi', 'quynh']
    const [name, changeNewName, addName, list_name_user] = UserList(list_name_initial)
    const show_list_users = (users) => {
        let result = null
        result = users.map((value, index) => {
            if (index === users.length - 1) {
                return (
                    <span>{value}</span>
                )
            } else {
                return (
                    <span>{value} ,</span>
                )
            }

        })
        return result
    }
    return (
        <div className="App">
            <p>学生一覧：[{show_list_users(list_name_initial)}]</p>
            <p>追加する名前を入力してください。</p>
            <input value={name} onChange={changeNewName} />
            <button onClick={addName} >確定</button>
            <p>追加する名前： {name}</p>
            <p>新しい一覧：[{show_list_users(list_name_user)}]</p>
        </div>
    );
}

export default App;
