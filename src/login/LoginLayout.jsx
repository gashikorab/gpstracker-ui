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

const LoginLayout = ({ children, className }) => {
  const { classes } = useStyles();
  const rootClassName = className ? `${classes.root} ${className}` : classes.root;
  return (
    <main className={rootClassName}>
      <Paper className={`${classes.paper} loginCard`}>
        <div className={`${classes.logo} loginLogo`}>
          <LogoImage height={64} />
        </div>
        <form className={`${classes.form} loginForm`}>
          {children}
        </form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
