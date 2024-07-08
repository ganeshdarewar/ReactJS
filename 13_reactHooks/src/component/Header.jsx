import React from 'react'

const Header = () => {
    console.log('header rendered');
    return (
        <div>
            Header
        </div>
    )
}

export default React.memo(Header)
