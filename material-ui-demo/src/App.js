import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function App(){

  const classes = useStyles();

  return (
    <Grid 
        container
        direction='column'
        justify='center'
        alignItems='center'
    >
      <Grid item xs={6}>
        <Paper 
            elevation={3}
            style={{padding: "20px"}}
        >
          <form className={classes.root} noValidate autoComplete="off"> 
            <TextField fullWidth={true}
                       required
                       label='E-mail'
                       variant='outlined'
                       />
            <TextField required label='Password' variant='outlined'/>
          </form>
        </Paper>
      </Grid>
      
    </Grid>
  );
}


