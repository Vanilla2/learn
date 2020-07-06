import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button, makeStyles, createMuiTheme, InputBase,} from '@material-ui/core'
import { fade} from '@material-ui/core/styles';
import {teal, lightGreen} from "@material-ui/core/colors";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    AppBar:{
        backgroundColor: "rgb(17,51,66)",
        background: "linear-gradient(90deg, rgba(17,51,66,1) 3%, rgba(2,35,50,1) 62%, rgba(1,54,78,1) 100%)"
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Top = ({search}) => {
    const classes = useStyles();
    return(
        <AppBar className = {classes.AppBar} position="static">
            <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    Smarter Every-Day
                </Typography>
                {search ? <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div> : <div/>}
            </Toolbar>
        </AppBar>
    )
}

export default  Top;