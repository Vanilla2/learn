import React from 'react';
import {Grid, List, ListItem, ListItemText, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    typography: {
        '& span':{
            fontSize: 20
        }
    }
})

const Categories = ({categories}) =>{
    const classes = useStyles();
    return(
        <>
            <Typography variant = "h6">
                Categories:
            </Typography>
            <List component="nav" aria-label="contacts">
                {categories.map((x, index) =>(
                    <ListItem key = {index} button>
                        <ListItemText className = {classes.typography} primary={x}/>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default Categories;