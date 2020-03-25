import React, { useState, useEffect } from 'react';
import EditFriendsForm from '../components/EditFriendsForm'

// import AddFriendsForm from './AddFriendsForm';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = props => {
    const [friends, setFriends] = useState([]);
    const [editingFriend, setEditingFriend] = useState();


    const fetchFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.log(err))
        }
        useEffect(() => {
            fetchFriends()
        
    }, [])


    const deleteFriend = (id) => {
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.log(err.response))

    }
    const editFriend = friendObj => {
        setEditingFriend(friendObj)
    }

    return (
        <div>
            <EditFriendsForm editingFriends={editingFriend} setFriends={setFriends} setEditingFriend={setEditingFriend} />
            {/* <AddFriendsForm setFriends={setFriends} /> */}
            <div className='container'>
                {friends.map(friend => {
                    return (
                    <div className='friends' key={friend.id}>
                        <h2>{friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                        <button onClick={() => editFriend(friend)}>Edit</button>
                        <button onClick={() => deleteFriend(friend.id)}>Delete</button>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default FriendsList;