import React, { useState, useEffect } from 'react'

import axiosWithAuth from '../utils/axiosWithAuth'

const initialItem = {
    name: '',
    age: '',
    email: ''
}

const EditFriendsForm = props => {
    console.log(props)
    const [updated, setUpdated] = useState({name: '', age: '', email: ''})

    const handleChanges = e => {
        setUpdated({
            ...updated, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (props.editingFriend ){
            setUpdated({
                name: props.editingFriend.name,
                age: props.editingFriend.age,
                email: props.editingFriend.enail
            })
        }else {
            setUpdated({name: '', age: '', email: ''})
        }
    },[props.editingFriend])

    const handleSubmit = e => {
        e.preventDefault();
        if(props.editingFriend){

        
        axiosWithAuth()
            .put(`/friends/${props.editingFriend.id}`, updated)
            .then(res => {
                console.log(res, "PUT")
                props.setFriends(res.data)
                setUpdated({name: '', age: '', email: ''})
                props.setEditingFriend(null);
            })
        }else {
            axiosWithAuth()
                .post('/friends', updated)
                .then(res => {
                    console.log(res, 'POST')
                    props.setFriends(res.data)
                    setUpdated({name: '', age: '', email: ''})
                })
            .catch(err => console.log(err))
    }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={updated.name}
                    onChange={handleChanges}
                />
                <input
                    type='number'
                    name='age'
                    value={updated.age}
                    onChange={handleChanges}
                />
                <input
                    type='email'
                    name='email'
                    value={updated.email}
                    onChange={handleChanges}
                />
                <button type='submit'>{props.editingFriend ? 'Submit' : 'Add Friend'}</button>
            </form>
        </div>
    )
}

export default EditFriendsForm