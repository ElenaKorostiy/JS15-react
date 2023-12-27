import { useSelector } from 'react-redux';
import { selectSelectedUser, fetchUser } from './userSlice';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const UserInfo = () => {
    const dispatch = useDispatch();
    const selectedUser = useSelector(selectSelectedUser);
    const { id } = useParams();

  
    
    
    useEffect(() => {
        dispatch(fetchUser(id));
    }, [dispatch]);
    console.log(selectedUser);
    


    return (
        <div>
            <h2>User Information</h2>
            <Link to={`/users`}>
                <button>Back List</button>
            </Link>
            {selectedUser.data && (
                <div>
                    <img src={selectedUser.data.image} alt={`${selectedUser.data.firstName} ${selectedUser.data.lastName}`} />
                    <p>Email:{selectedUser.data.email}</p>
                    <p>ID: {selectedUser.data.id}</p>
                    <p>Name: {selectedUser.data.firstName} {selectedUser.data.lastName}</p>
                    <p>Age: {selectedUser.data.age}</p>
                    <p>Gender: {selectedUser.data.gender}</p>
                    <p>Phone: {selectedUser.data.phone}</p>
                </div>
            )}
        </div>
    );
};