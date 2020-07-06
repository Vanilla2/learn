import React, {useEffect, useState} from 'react';
import Top from "./Top";
import {createMuiTheme, ThemeProvider, Button, Container, Grid, List, ListItem, ListItemText, Paper, Typography} from "@material-ui/core";
import {lightGreen, teal} from "@material-ui/core/colors";
import Categories from "./Categories";
import Courses from "./Courses";
import {Redirect} from "react-router-dom";

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#022332',
        },
        secondary: {
            main: '#268cb7',
        },
    },
})
let fakeCategories = ["Arhitecture", "Love", "Desgin", "Ux/UI Design"];
let fakeCourses = [
    {
        id: 2,
        author: "TED-Ed",
        duration: "4h 31m",
        title: "Can you Solve the Riddles that may play with your mind?",
        description: "Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed",
        image: "https://m.economictimes.com/thumb/msid-68850155,width-1200,height-900,resizemode-4,imgsize-148529/elearning-getty.jpg"
    },
    {
        id: 5,
        author: "TED-Ed",
        duration: "4h 31m",
        title: "Can you Solve the Riddles that may play with your mind?",
        description: "Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed",
        image: "https://m.economictimes.com/thumb/msid-68850155,width-1200,height-900,resizemode-4,imgsize-148529/elearning-getty.jpg"
    },    {
        id: 4,
        author: "TED-Ed",
        duration: "4h 31m",
        title: "Can you Solve the Riddles that may play with your mind?",
        description: "Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed",
        image: "https://m.economictimes.com/thumb/msid-68850155,width-1200,height-900,resizemode-4,imgsize-148529/elearning-getty.jpg"
    },    {
        id: 3,
        author: "TED-Ed",
        duration: "4h 31m",
        title: "Can you Solve the Riddles that may play with your mind?",
        description: "Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed",
        image: "https://m.economictimes.com/thumb/msid-68850155,width-1200,height-900,resizemode-4,imgsize-148529/elearning-getty.jpg"
    },    {
        id: 1,
        author: "TED-Ed",
        duration: "4h 31m",
        title: "Can you Solve the Riddles that may play with your mind?",
        description: "Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed",
        image: "https://m.economictimes.com/thumb/msid-68850155,width-1200,height-900,resizemode-4,imgsize-148529/elearning-getty.jpg"
    },    {
        id: 0,
        author: "TED-Ed",
        duration: "4h 31m",
        title: "Can you Solve the Riddles that may play with your mind?",
        description: "Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed Lorem ipsum sid amed",
        image: "https://m.economictimes.com/thumb/msid-68850155,width-1200,height-900,resizemode-4,imgsize-148529/elearning-getty.jpg"
    }
]
const Home = (props) =>{
    const [categories, setCategories] = useState(fakeCategories);
    const [courses, setCourses] = useState(fakeCourses);
    if (!props.logged){
        return(
            <Redirect to = "/learn/login"/>
        )
    }
    return(
        <ThemeProvider theme={theme}>
            <Top search/>
            <Container maxWidth="xl" style = {{padding: 20}}>
                <Grid container>
                    <Grid item xs = {3}>
                        <Categories categories = {categories}/>
                    </Grid>
                    <Grid item xs>
                        <Courses courses={courses}/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default  Home;