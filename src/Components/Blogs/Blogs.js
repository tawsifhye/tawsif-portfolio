import React, { useEffect } from 'react';
import coming_soon_banner from '../../images/coming_soon.jpg'
const Blogs = () => {

    useEffect(() => {
        document.title = "Tawsif Dot Dev | Blogs"
    }, [])

    return (
        <div>
            <img src={coming_soon_banner} alt="coming soon banner" />
        </div>
    );
};

export default Blogs;