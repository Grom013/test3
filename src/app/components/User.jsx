import {toggleIsRead} from "../store/userSlice";
import {useDispatch} from "react-redux";

const User = ({
                  id,
                  name,
                  date,
                  isRead,
                  importance,
                  equipment,
                  message,
              }) => {
    const dispatch = useDispatch()
    return (
        <tr className={isRead ? 'btn-primary' : ''} onDoubleClick={() => dispatch(toggleIsRead(id))}>
            <td>{date}</td>
            <td>
                {importance}
            </td>
            <td>{equipment}</td>
            <td >{message}</td>
            <td>{name}</td>
        </tr>
    );
};

export default User;
