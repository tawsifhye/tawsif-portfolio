import React, { useState } from 'react';

const FloatingButton = () => {
    const [isScroll, setIsScroll] = useState(false)

    const showButton = () => {
        if (document.documentElement.scrollTop > 20) {
            setIsScroll(true);
        }
        else setIsScroll(false);
    };
    window.addEventListener("scroll", showButton)

    const scrollUp = () => {
        document.documentElement.scrollTop = 0;
    }
    return (
        <div>
            {isScroll &&
                <div>
                    <button class="floating-button text-5xl" onClick={scrollUp}>
                        <i class="far fa-arrow-alt-circle-up"></i>
                    </button>
                </div>
            }
        </div>
    );
};

export default FloatingButton;