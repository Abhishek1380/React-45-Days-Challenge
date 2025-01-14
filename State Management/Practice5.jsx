// Like Button
// Create a like button that toggles between "Like" and "Unlike" text when clicked
import { useState } from 'react';

export default function LikeButton() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <button
                onClick={toggleLike}
                style={buttonStyle}
            >
                {liked ? 'Unlike' : 'Like'}
            </button>
        </div>
    );
}

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: '#fff',
};