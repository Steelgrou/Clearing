
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import burger from '/burger.svg'
import { Link } from 'react-router-dom';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img src={burger} className='header-burger' alt="false"  />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}> <Link to="/">Home</Link></MenuItem>
                <MenuItem onClick={handleClose}> <Link to="/aboutpage">About</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/servicespage">Services</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/">Articles</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/contactpage">Contact</Link></MenuItem>
            </Menu>


        </div>
    );
}