import React, { useEffect, useState } from 'react'
import { deleteUser, getAllUsers } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const UserList = () => {

    let [users, setUsers] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        loadUsers();
    },[]);

    let loadUsers = async () =>{
        try{
            let response = await getAllUsers();
            setUsers(response.data);
        }catch (error){
            console.error("Error fetching users:",error);
            
        }
    };

    let handleDelete = async (id) =>{
        try{
            await deleteUser(id);
            loadUsers();
        }catch (error){
            console.error("Error deleting user:",error);
            
        }
    };


  return (
    <div className='container'>
        <div className='title-btn'>
            <h2>User Management</h2>
            <button className='btn btn-add' onClick={()=>navigate("/addUser")}>
                + Add User
            </button>
        </div>

        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user =>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td className='userlist-btn'>
                            <button className='btn-edit' onClick={() => navigate(`/editUser/${user.id}`)}>
                                Edit
                            </button>

                            <button className='btn-delete' onClick={()=>handleDelete(user.id)}>
                                Delete
                            </button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>

        </table>
      
    </div>
  )
}

export default UserList
