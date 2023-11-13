import Users from "./components/Users";
import {useState} from "react";
import CardUsers from "./components/CardUsers/CardUsers";
import {Search} from "./components/Search";
import './app.css'
import {AddUser} from "./components/Adduser/AddUser";
import { useSelector} from "react-redux";

const App = () => {
    const users = useSelector((state) => state.users);
    const [card, setCard] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [modalActive, setModalActive] = useState(false)



    const filteredUsers = users.filter(user => {
        return user.message.toLowerCase().includes(searchText.toLowerCase())
    })
    return (
        <div className='m-5'>
            <div className='d-flex justify-content-between m-5'>
                <div className="btn-group">
                    <div onClick={() => setCard(false)} className="btn btn-primary active" aria-current="page">Таблица
                    </div>
                    <div onClick={() => setCard(true)} className="btn btn-primary">Карточки</div>

                </div>
                <div className='circle' onClick={() => setModalActive(true)}>+</div>
                <Search setSearchText={setSearchText}/>
            </div>
            <AddUser users={users} active={modalActive} setActive={setModalActive}/>

            {
                card ?
                    <CardUsers
                        users={users}
                        status={users.isRead}
                        filteredUsers={filteredUsers}

                    />
                    :
                    <Users
                        users={users}
                        status={users.isRead}
                        filteredUsers={filteredUsers}
                    />
            }
        </div>
    );
};

export default App;
