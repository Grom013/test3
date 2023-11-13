import { useState} from "react";
import {paginate} from "../../../utils/paginate";
import {Pagination} from "../Pagination";
import './CardUsers.css'

const CardUsers = ({users: allUsers,filteredUsers, ...rest}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 3
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }


    const count = filteredUsers.length

    const usersCrop = paginate(filteredUsers, currentPage, pageSize)
    return (

            <div className='row'>
                {usersCrop.map((user) => (

                    <div  key={user.id} className='container'>
                        <div className='card_wrapper'>
                            <div className='date_info'>
                                <span>Дата</span>
                                <span>{user.date}</span>
                            </div>
                            <div className='importance_info'>
                                <span>Важность</span>
                                <span>{user.name}</span>
                            </div>
                            <div className='equipments_info'>
                                <span>Оборудование</span>
                                <span>{user.equipment}</span>
                            </div>
                            <div className='message_info'>
                                <span>Сообщения</span>
                                <span>{user.message}</span>
                            </div>
                        </div>
                        <div className='user_info'>
                            <div className="img"></div>
                            <div>{user.name}</div>
                        </div>
                    </div>
                ))}
                <div className='d-flex justify-content-center mt-5'>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        // </div>

    )

};

export default CardUsers;
