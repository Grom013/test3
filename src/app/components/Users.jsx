import User from "./User";
import {Pagination} from "./Pagination";
import { useState} from "react";
import {paginate} from "../../utils/paginate";

const Users = ({users: allUsers,filteredUsers, ...rest}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 3
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }





    const count = allUsers.length

    const usersCrop = paginate(filteredUsers, currentPage, pageSize)

    return (
        <div className="d-flex flex-column m-5 ">
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Дата</th>
                    <th scope="col">Важность</th>
                    <th scope="col">Оборудование</th>
                    <th scope="col">Сообщение</th>
                    <th scope="col">Ответственный</th>
                </tr>
                </thead>
                <tbody>
                {usersCrop?.map((user) => (<User key={user.id} {...user} {...rest} />))}
                </tbody>
            </table>

            <div className="d-flex justify-content-center mt-5">
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </div>
    </div>);
};

export default Users;
