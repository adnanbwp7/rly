import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { BsArrowLeft, } from 'react-icons/bs'
const NotFound = () => {
    return (
        <>
            <div className="not_found_container">
                <div className="text-404">Error <div style={{ color: '#FF3E00' }}>404</div></div>
                <div className="text-not-found">Page not found</div>
                <Link to="/">
                    <BsArrowLeft fontSize="35px" />
                    back to main page
                </Link>
            </div>
        </>
    )
}

export default NotFound