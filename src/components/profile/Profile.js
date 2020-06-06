import React, { useState } from 'react'
import './Profile.css'

export const Profile = () => {
    const [state, setState] = useState({})

    const handleDelete = () => {
        // api request to delete user
    }

    return (
        <React.Fragment>
            <div><img src="" alt="" /></div>
            <button type="submit">
                Choose File
            </button>
            <button type="submit">
                Update Image
            </button>
            <h2>{/* {...Dynamic Profile Name... API Request} */}</h2>
            <div>{/* {...Dynamic Name...} */}</div>
            <p>{/* ...Dynamic Bio... Default, no bio added*/}</p>
            <button type="submit" onClick={handleDelete}>Delete Profile</button>
        </React.Fragment>
    )
}