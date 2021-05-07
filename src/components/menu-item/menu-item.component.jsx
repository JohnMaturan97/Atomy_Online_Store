import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageUrl, size = '', linkUrl, className }) => {
    return (
      <Link to={`/${linkUrl}`} className={`${className} ${size} menu-item`}>
        <div


        className='background-image'
        style = {{
            backgroundImage:`url(${imageUrl})`
            }}  
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>{subtitle}</span>
        </div>
   </Link>
);

}

export default withRouter(MenuItem);