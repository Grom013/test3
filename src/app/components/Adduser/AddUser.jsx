import './AddUser.css'
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addUser} from "../../store/userSlice";

export const AddUser = ({active, setActive}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [equipment, setEquipment] = useState('');
    const [message, setMessage] = useState('');
    const [importance, setImportance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: `f${(+new Date).toString(16)}`,
            date: new Date()
                .toISOString()
                .substring(0, 19)
                .replace('T', ' ')
                .replaceAll('-', '.'),
            name,
            importance,
            equipment,
            message,
            isRead: false
        };
        dispatch(addUser(newUser));

        setName('');
        setEquipment('');
        setMessage('');
        setImportance('')
    }
    console.log(importance)


    return (
        <div className={active ? 'row modal active' : 'row modal'} onClick={() => setActive(false)}>
            <form onSubmit={handleSubmit} className='container modal-content' onClick={e => e.stopPropagation()}>
                <div className='card_wrapper'>
                    <div className='date_info'>
                        <span>Дата</span>
                        <span></span>
                    </div>
                    <div className='importance_info'>
                        <span>Важность</span>

                        <select value={importance} onChange={e => setImportance(e.target.value)}
                                className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value='критически'>критически</option>
                            <option value='важно'>важно</option>
                            <option value='низкая'>низкая</option>
                        </select>

                    </div>
                    <div className='equipments_info me'>
                        <span className='me-3'>Оборудование</span>
                        <input
                            type='text'
                            value={equipment}
                            onChange={e => setEquipment(e.target.value)}
                        />
                    </div>
                    <div className='message_info'>
                        <span className='me-3'>Сообщения</span>
                        <input
                            type='text'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <div className='user_info'>
                    <div className="img"></div>
                    <input
                        className='mt-2 w-100'
                        placeholder='name'
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    onClick={() => setActive(false)}
                    className='add-btn btn btn-primary'
                >
                    Add
                </button>
            </form>

        </div>

    );
};