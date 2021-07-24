import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NetworkForm from './NetworkForm';
import { orange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { spacing } from '@material-ui/system'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),


    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 650,
        background: orange[500],

    },

    papersecondary: {
        padding: theme.spacing(2),
        height: 400,
        background: '#00FF99',

    },
    
    buttonGroup: {
        margin: theme.spacing(2),
        borderRadius: 0,
    },


}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <ButtonGroup className={classes.buttonGroup}
                                orientation="vertical"
                                color="primary"
                                aria-label="vertical contained primary button group"
                                variant="contained"
                                disableElevation true
                                size="large"
                            >
                                <Button className={classes.buttonGroup}>One</Button>
                                <Button className={classes.buttonGroup}>Two</Button>
                                <Button className={classes.buttonGroup}>Three</Button>
                                <Button className={classes.buttonGroup}>four</Button>
                                <Button className={classes.buttonGroup}>five</Button>
                            </ButtonGroup>
                        </Grid>


                        <Paper className={classes.papersecondary} elevation={2}>
                        <Grid item xs>
                            <NetworkForm/>
                        </Grid>
                        </Paper>
                    </Grid>

                </Grid>

            </Paper>
        </div>
    );
}
