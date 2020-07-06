import React, {useEffect, useState} from 'react';
import {TextField, Button, createMuiTheme, ThemeProvider, Typography, CircularProgress, Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import '../wave.css';
import {Redirect} from "react-router-dom";
import Dialog from "./dialog";
import DialogComponent from "./dialog";
const Custom = styled(TextField)({
    borderRadius: "4px",
    backgroundColor: "rgb(255,255,255)",
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const style = {
    Box:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    Box2:{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    Element: {
        zIndex: "1000",
        width: "100%",
        marginBottom: "15px"
    },
    Brand:{
        position: "absolute",
        top: "23%",
        zIndex: "1000",
        textAlign: "center",
        color: "white"
    }

}

const Login = (props) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [loading, setLoading] = useState(false);
    const [localLogged, setLocalLogged] = useState(props.logged);
    const [dialogState, setDialogState] = React.useState(false);

    const tryLog = () =>{
        setLoading(true);
        console.log(user, pass);
        setTimeout(() => {
            if (user === "admin" && pass === "admin") {
                props.LogIn();
                setLocalLogged(true);
            }
            else {
                setDialogState(false);
                setLoading(false);
                setDialogState(true);
            }
        }, 2000);
    }
    const handleKey = (e) => {
        if (e.keyCode === 13){
            tryLog();
        }
    }
    useEffect(() =>{
        document.addEventListener("keyup", handleKey);
        return(() =>{
            document.removeEventListener("keyup", handleKey);
        });
    });
    if (localLogged){
        return(
            <Redirect to = "/learn/home"/>
        )
    }
    return(
        <>
        <div style = {{backgroundColor: "#27273C"}}className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png'"}}/>
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png'"}}/>
            </div>
            <div className="waveWrapperInner bgBottom">
                <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png'"}}/>
            </div>
        </div>
        <Box style = {style.Box} maxWidth = "xs">
            <Typography style = {style.Brand} variant = "h2">Smarter Every-Day</Typography>
            <Box style = {style.Box2}>
                <Custom onChange = {event => setUser(event.target.value)} value = {user} style ={style.Element} id="outlined-basic" label="E-Mail" variant="filled" />
                <Custom type = {"password"} onChange = {event => setPass(event.target.value)} value = {pass} style ={style.Element} id="outlined-basic" label="Password" variant="filled" />
                {loading ?
                    <CircularProgress style ={{zIndex: "100", marginTop: "10px"}}/> :
                    <Button onClick={tryLog} style={style.Element} variant="contained" color="primary">
                        Log In
                    </Button>}
            </Box>
        </Box>
            <Snackbar anchorOrigin={{vertical: "top", horizontal:"center"}} open={dialogState} autoHideDuration={4000} onClose={() => setDialogState(false)}>
                <Alert onClose={() => setDialogState(false)} severity="error">
                    Incorrect E-Mail or Password
                </Alert>
            </Snackbar>
        </>
    )
}

export default Login;