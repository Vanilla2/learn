import React from 'react'
import {Grid, IconButton, Paper, Typography} from "@material-ui/core";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {Redirect} from "react-router";
import { Link } from 'react-router-dom';

const Courses = ({courses}) => {
    return(
        <>
            {/*<Typography style = {{marginLeft: 15}} variant="h6">*/}
            {/*    Courses:*/}
            {/*</Typography>*/}
            <Grid justify = "center" container>
                {courses.map(x =>(
                    <Grid key = {x.id} item xs = {12} sm = {10} md = {6} lg = {4}>
                        <Link style = {{textDecoration: "none"}} to = {`/learn/course/${x.id}`}>
                            <Paper style = {{margin: 10, borderRadius: "5px", maxWidth: "500px"}} elevation = {4}>
                                <div className="container">
                                    <div className="image-wrapper">
                                        <img style = {{borderRadius: "5px 5px 0 0 "}} src={x.image} alt=""/>
                                        <IconButton color = "primary">
                                            <BookmarkBorderIcon button style = {{position: "relative", top:0, right: 0, color: "white"}}/>
                                        </IconButton>
                                    </div>
                                </div>
                                <div style = {{padding: "10px"}}>
                                    <div style = {{display: "flex", justifyContent: "space-between", marginBottom: "10px"}}>
                                        <Typography variant = "subtitle1">
                                            {x.author}
                                        </Typography>
                                        <Typography variant = "subtitle1">
                                            {x.duration}
                                        </Typography>
                                    </div>
                                    <Typography variant = "h6">
                                        {x.title}
                                    </Typography>
                                </div>
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default Courses;