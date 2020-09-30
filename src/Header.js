import React from 'react'

function Header() {
    return (
        <div className='header'>

            <img className='headerLogo' src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"></img>

            <div className='header_search'>
                <input className='header_searchInput' type='text' />
            </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>
            </div>
        </div>

    )
}

export default Header
