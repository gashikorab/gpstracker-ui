import { Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import LogoImage from './LogoImage';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: theme.spacing(72),
    boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',
  },
  form: {
    maxWidth: theme.spacing(52),
    padding: theme.spacing(5),
    width: '100%',
  },
  logo: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}));

const LoginLayout = ({ children }) => {
  const { classes } = useStyles();
  return (
    <main className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.logo}>
          <LogoImage height={64} />
        </div>
        <form className={classes.form}>
          {children}
        </form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
