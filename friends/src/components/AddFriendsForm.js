// import React, { useState } from 'react';

// import { axiosWithAuth } from '../utils/axiosWithAuth'

// const AddFriendsForm = props => {
//     const [friend, setFriend] = useState({ name: '', age: '', email: '' })

//     const handleChange = e => {
//         setFriend({ ...friend, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = e => {
//         e.preventDefault();

//         axiosWithAuth()
//             .post('/friends', friend)
//             .then(res => {
//                 props.setFriends(res.data)
//             })
//             .catch(err => console.log(err))

//         setFriend({
//             name: '',
//             age: '',
//             email: ''
//         })
//     }
//     return (
//         <div className='inputs'>
//             <h2>Add a New Friend: </h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type='text'
//                     placeholder='name'
//                     name='name'
//                     onChange={handleChange}
//                     value={friend.name}
//                 />
//                 <input
//                     type='text'
//                     placeholder='age'
//                     name='age'
//                     onChange={handleChange}
//                     value={friend.age}
//                 />
//                 <input
//                     type='text'
//                     placeholder='email'
//                     name='email'
//                     onChange={handleChange}
//                     value={friend.email}
//                 />
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default AddFriendsForm;