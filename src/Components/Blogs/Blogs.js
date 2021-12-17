import React, { useEffect, useState } from 'react';
import coming_soon_banner from '../../images/coming_soon.jpg'
import loader from '../../images/loader2.gif'
const Blogs = () => {
    const [loading, isLoading] = useState(false)
    useEffect(() => {
        document.title = "Tawsif Dot Dev | Blogs"
        setTimeout(() => {
            isLoading(true)
        }, 3000)

    }, [])

    return (
        <div>

            {
                !loading ? <div className='flex justify-center' style={{ height: '100vh' }}>
                    <img className='w-75' src={loader} alt="" />
                </div>
                    :
                    <div>
                        <img src={coming_soon_banner} alt="coming soon banner" />
                    </div>
            }


        </div>
    );
};

export default Blogs;