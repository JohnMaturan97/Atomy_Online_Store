import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'Beauty',
                  subtitle: 'Define Beauty. Define You.',
                  imageUrl: 'https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                  id: 1,
                  linkUrl: 'shop/Beauty'
                },
                {
                  title: 'Living',
                  subtitle: 'All you need is Change',
                  imageUrl: 'https://images.unsplash.com/photo-1571992579655-8134e2b8df0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                  id: 2,
                  linkUrl: 'shop/Living'
                },
                {
                  title: 'Food',
                  subtitle: 'You are what you eat',
                  imageUrl: 'https://images.unsplash.com/photo-1474859569645-e0def92b02bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
                  id: 3,
                  linkUrl: 'shop/Food'
                },
                {
                  title: 'Personal Care',
                  subtitle: 'Get the glow',
                  imageUrl: 'https://images.unsplash.com/photo-1577467013350-7c22a844e1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/Personal Care'
                },
                {
                  title: 'Health Care',
                  subtitle: 'Health is the real wealth',
                  imageUrl: 'https://images.unsplash.com/photo-1597817109745-c418f4875230?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/Health Care'
                }],
        }
    }
        render() { 
            return (
                <div className="directory-menu">
                {
                this.state.sections.map(({title,imageUrl, subtitle,id, size}) => (
                    <MenuItem key={id} title={title} subtitle={subtitle} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        );
    }

}

export default Directory;
