import { useTheme, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import Logo from '../resources/images/logo.png';

const useStyles = makeStyles()((theme, { height }) => ({
  image: {
    alignSelf: 'center',
    maxWidth: '240px',
    width: 'auto',
    height,
    margin: theme.spacing(2),
  },
}));

const LogoImage = ({ height = 32 }) => {
  const theme = useTheme();
  const { classes } = useStyles({ height });

  const expanded = !useMediaQuery(theme.breakpoints.down('lg'));

  const logo = useSelector((state) => state.session.server.attributes?.logo);
  const logoInverted = useSelector((state) => state.session.server.attributes?.logoInverted);

  if (logo) {
    if (expanded && logoInverted) {
      return <img className={classes.image} src={logoInverted} alt="" />;
    }
    return <img className={classes.image} src={logo} alt="" />;
  }
  return <img className={classes.image} src={Logo} alt="" />;
};

export default LogoImage;
