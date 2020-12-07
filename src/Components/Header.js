import React from 'react';
import Link from './Link'

const Header = () => {
    return (
        <div className = 'ui secondary pointing menu'>
            <Link href = '/' className = 'ui item'>Accordion</Link>
            <Link href = '/list' className = 'ui item'>Search</Link>
            <Link href = '/dropdown' className = 'ui item'>Dropdown</Link>
            <Link href = '/translate' className = 'ui item'>Translate</Link>

        </div>
    )
}

export default Header;