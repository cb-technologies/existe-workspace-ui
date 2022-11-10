import * as React from 'react';
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SortIcon from "@mui/icons-material/Sort";
import {makeStyles} from "@mui/styles";
import Menu from "@mui/material/Menu";

const pages = ['Ressources', 'Services', ''];
const useStyles = makeStyles(() => ({
    icon:{
        color: '#ffff',
        fontSize: '2rem'
    }
}));

const MenuButton = (props:any) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const classes = useStyles();
    return (
        <Box>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <SortIcon className={classes.icon}/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default MenuButton;