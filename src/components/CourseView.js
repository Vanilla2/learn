import React, {useState} from 'react'
import {Grid, IconButton, List, ListItem, ListItemText, makeStyles, Paper, Typography, Container} from "@material-ui/core";
import {Redirect, useParams} from "react-router";
import Top from "./Top";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
    list: {
        '& span':{
            fontSize: 20,
            color: "white",
            fontWeight: "300"
        },
        "& hover":{
            backgroundColor: "#000000 !important"
        }
    },
    typography: {
        fontSize: 17,
        color: "white",
    }
}));

let data = [
    {
        length: "4:34m",
        title: "The Prisoner Hat Riddle",
        id: 0,
        video: "https://www.youtube.com/embed/N5vJSNXPEwA",
        description: `You and nine other individuals have been captured by super-intelligent alien overlords. The aliens think humans look quite tasty, but their civilization forbids eating highly logical and cooperative beings. Unfortunately, they’re not sure whether you qualify, so they decide to give you all a test. Can you solve this hat riddle? Alex Gendler shows how.`
    },
    {
        length: "3:49m",
        title: "The Bridge Riddle",
        id: 1,
        video: "https://www.youtube.com/embed/7yDmGnA8Hw0",
        description: `Taking that internship in a remote mountain lab might not have been the best idea. Pulling that lever with the skull symbol just to see what it did probably wasn’t so smart either. But now is not the time for regrets because you need to get away from these mutant zombies...fast. Can you use math to get you and your friends over the bridge before the zombies arrive? Alex Gendler shows how.`
    },
    {
        length: "4:41m",
        title: "The Famously Difficult Green-Eyed Logic Puzzle",
        id: 2,
        video: "https://www.youtube.com/embed/98TQv5IAtY8",
        description: `One hundred green-eyed logicians have been imprisoned on an island by a mad dictator. Their only hope for freedom lies in the answer to one famously difficult logic puzzle. Can you solve it? Alex Gendler walks us through this green-eyed riddle.`
    },
    {
        length: "5:12m",
        title: `The "Eisten's Riddle"`,
        id: 3,
        video: "https://www.youtube.com/embed/1rDVz_Fb6HQ",
        description: `Before he turned physics upside down, a young Albert Einstein supposedly showed off his genius by devising a complex riddle involving a stolen exotic fish and a long list of suspects. Can you resist tackling a brain teaser written by one of the smartest people in history? Dan Van der Vieren shows how.`
    },
    {
        length: "3:49m",
        title: "The Locker Riddle",
        id: 4,
        video: "https://www.youtube.com/embed/c18GjbnZXMw",
        description: `Your rich, eccentric uncle just passed away, and you and your 99 nasty relatives have been invited to the reading of his will. He wanted to leave all of his money to you, but he knew that if he did, your relatives would pester you forever. Can you solve the riddle he left for you and get the inheritance? Lisa Winer shows how. `
    },
    {
        length: "4:53m",
        title: "The Three Gods Riddle",
        id: 5,
        video: "https://www.youtube.com/embed/LKvjIsyYng8",
        description: `You and your team have crash-landed on an ancient planet. Can you appease the three alien overlords who rule it and get your team safely home? Created by logician Raymond Smullyan, and popularized by his colleague George Boolos, this riddle has been called the hardest logic puzzle ever. Alex Gendler shows how to solve it.`
    },
    {
        length: "5:25m",
        title: "The Wizard Standoff Riddle",
        id: 6,
        video: "https://www.youtube.com/embed/mmkCS5eA4f8",
        description: `You’ve been chosen as a champion to represent your wizarding house in a deadly duel against two rival magic schools. Your opponents are a powerful sorcerer who wields a wand that can turn people into fish, and a powerful enchantress who wields a wand that turns people into statues. Can you choose a wand and devise a strategy that ensures you will win the duel? Dan Finkel shows how.`
    },
    {
        length: "4:12m",
        title: "The Temple Riddle",
        id: 7,
        video: "https://www.youtube.com/embed/nSbvlktToSY",
        description: `Your expedition finally stands at the heart of the ancient temple. But as you study the inscriptions in the darkness, two wisps of green smoke burst forth. The walls begin to shake. The giant sandglass begins flowing with less than an hour before it empties, and a rumbling tells you that you don’t want to be around when that happens. Can you use math to escape the temple? Dennis E. Shasha shows how. `
    },
]
const CourseView = ({logged}) =>{
    const classes = useStyles();
    let { id } = useParams();
    const [lessons, setLessons] = useState(data);
    const [lessonIndex, setLessonIndex] = useState(0);
    if (!logged){
        return(
            <Redirect to="/learn/login"/>
        )
    }
    return(
        <>
            <Top/>
            <div style = {{minHeight: "94vh", backgroundColor: "#31596b"}}>
                <Grid style = {{padding: 15, paddingBottom: "50px", backgroundColor: "rgb(17,51,66)", background: "linear-gradient(90deg, rgba(17,51,66,1) 3%, rgba(2,35,50,1) 62%, rgba(1,54,78,1) 100%)"}}container>
                    <Grid style = {{marginBottom: "30px"}} item xs = "12" sm = "12" md = "12" lg = "8" >
                        <Typography className={classes.typography} variant = "h6">
                            {`Current lesson: ${lessons[lessonIndex].title}`}
                        </Typography>
                        <div className="container">
                            <div className="image-wrapper">
                                <iframe width="100%" height="100%" src={lessons[lessonIndex].video} frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen />
                            </div>
                        </div>
                    </Grid>
                    <Grid style = {{padding: 10, paddingTop: 0}} item xs = "12" sm = "12" md = "12" lg = "4">
                        <Typography className={classes.typography} variant = "h6">
                            Lessons:
                        </Typography>
                        <List component="nav" aria-label="contacts">
                            {lessons.map((x, index) => {
                                let match;
                                if (index === lessonIndex)
                                    match = 1;
                                else
                                    match = 0;
                                console.log(match);
                                if (match) {
                                    return (
                                        <ListItem key = {x.id} style={{backgroundColor: "#4f7687"}} onClick={() => setLessonIndex(index)}
                                                  button>
                                            <ListItemText className={classes.list} primary={`${index + 1}. ${x.title}`}/>
                                            <ListItemSecondaryAction>
                                                {x.length}
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                }
                                return (
                                    <ListItem onClick={() => setLessonIndex(index)} button>
                                        <ListItemText className={classes.list} primary={`${index + 1}. ${x.title}`}/>
                                        <ListItemSecondaryAction>
                                            {x.length}
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                </Grid>
                <div style = {{backgroundColor: "#31596b"}}>
                    <Container style = {{ padding: 25}} maxWidth={"md"}>
                        <Typography style ={{color:"white", marginBottom: 15}} variant="h4">
                            Description:
                        </Typography>
                        <Typography style ={{color:"white", fontWeight: "300", textJustify: "inter-word"}} variant="h6">
                            {lessons[lessonIndex].description}
                        </Typography>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default CourseView;