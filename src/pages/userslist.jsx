import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers, useUsersSelector } from '../store/userSlice';
import { Link } from 'react-router-dom';

export const UserList = () => {
    const dispatch = useDispatch();
    const usersState = useUsersSelector();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    console.log(usersState);
     const users = usersState.data || [];

    return (
        <div>
            <h2>Users List</h2>
            <Link to={`/`}>
                  <button>List Products</button>
              </Link>
            {users && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                             <div>
                                <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
                                <p>{`${user.firstName} ${user.lastName}`}</p>
                                <p>Email: {user.email}</p>
                                <p>Phone: {user.phone}</p>
                                <p>Age: {user.age}</p>
                                <p>Gender: {user.gender}</p>
                               <Link to={`/users/${user.id}`}>
                                 <button>Details</button>
                               </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};