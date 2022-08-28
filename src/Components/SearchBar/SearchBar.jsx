import React from 'react'
import { useNavigate } from 'react-router-dom'
import searchSrc from '../../asset/icon/search.png'
import './index.scss'

export default function SearchBar({ hasBack = false }) {
    const navigate = useNavigate()
    const handleBlackClick = () => {
        navigate(-1)
    }
    return (
        <div className="search-bar">
            {hasBack && (
                <div className="back" onClick={handleBlackClick}>
                    back
                </div>
            )}
            <div className="search">
                <img src={searchSrc} alt="" />
                <input placeholder="SEARCH" />
            </div>
        </div>
    )
}
