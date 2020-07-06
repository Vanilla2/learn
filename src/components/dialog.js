import React from 'react'

import {Dialog, DialogTitle} from '@material-ui/core'

const DialogComponent = ({state, handleDialog}) =>{
    return(
        //eslint disable next line
        <Dialog onClose={handleDialog} aria-labelledby="simple-dialog-title" open={state}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        </Dialog>
    )
}

export default DialogComponent;