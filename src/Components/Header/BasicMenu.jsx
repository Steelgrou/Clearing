
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import burger from '/burger.svg'
import { Link } from 'react-router-dom';
import './BasicMenu.css'
import { useTranslation } from 'react-i18next'

import servicesLogo from '/menu-services-logo.svg'
import homeLogo from '/menu-home-logo.svg'
import contactLogo from '/menu-contact-logo.svg'


export default function BasicMenu() {
    //lang
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }
    //Menu

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
                <img src={burger} className='header-burger' alt="false" />
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
                <MenuItem onClick={handleClose}> <Link to="/" className='basic-link'>{t('menu.home')}<img className='basic-logo' src={homeLogo} alt="" /></Link></MenuItem>
                <MenuItem onClick={handleClose}> <Link to="/aboutpage" className='basic-link'>{t('menu.about')}</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/servicespage" className='basic-link'>{t('menu.services')}<img className='basic-logo' src={servicesLogo} alt="" /></Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/" className='basic-link'>{t('menu.articles')}</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/contactpage" className='basic-link'>{t('menu.contact')}<img className='basic-logo' src={contactLogo} alt="" /></Link></MenuItem>
            </Menu>


        </div>
    );
}