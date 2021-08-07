import {AppBar, Toolbar, makeStyles}  from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#654321'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        margin: '10px'
    }
});

const Header = () => {
    const headerStyle = useStyle();

    return (
        <AppBar className={headerStyle.header} position="static">
            <Toolbar>
                <NavLink to="/" exact className={headerStyle.tabs}>Home</NavLink>
                <NavLink to="/Students" exact className={headerStyle.tabs}>Students</NavLink>
                <NavLink to="/addStudent" exact className={headerStyle.tabs}> Add Student</NavLink>
                <NavLink to="/Search" exact className={headerStyle.tabs}>Search Student</NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default Header;