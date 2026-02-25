import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserById, saveUser, updateUser } from '../services/UserService';

const UserForm = () => {

  let {id} = useParams();
  let navigate = useNavigate();

  let [user,setUser] = useState({
    name: "",
    email:  "",
    role: ""
  });

  useEffect(()=>{
    if(id) {
      fetchUser();
    }
  },[id]);

  let fetchUser = async () =>{
    let res = await getUserById(id);
    setUser(res.data);
  }

  let handleChange = (e) =>{
    setUser({...user, [e.target.name] : e.target.value});
  }

  let handleSubmit = async (e) =>{
    e.preventDefault();

    if(id) {
      await updateUser(id, user);
    }else{
      await saveUser(user);
    }

    navigate("/");
  }



  return (
    <div className='container'>
      <h2 className='userform-h2'>{id ? "Edit User" : "Add User"}</h2>

      <form onSubmit={handleSubmit}>
        
        <div className='form-group'>
          <input type="text" 
        name='name' 
        value={user.name}
        onChange={handleChange}
        placeholder='Enter your name'
        />
        </div>
        
        <div className='form-group'>
          <input type="text" 
        name='email' 
        value={user.email}
        onChange={handleChange}
        placeholder='your@gmail.com'
        />
        </div>

        <div className='form-group'>
          <input type="text" 
        name='role' 
        value={user.role}
        onChange={handleChange}
        placeholder='Enter your role'
        />
        </div>

        <button type='submit' className='form-btn'>
          {id ? "Update" : "Save"}
        </button>

      </form>
      
    </div>
  )
}

export default UserForm
