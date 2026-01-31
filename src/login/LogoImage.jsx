import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, { height }) => ({
  image: {
    alignSelf: 'center',
    maxWidth: '240px',
    width: 'auto',
    height,
    margin: theme.spacing(2),
  },
}));

const LogoImage = ({ height = 96 }) => {
  const { classes } = useStyles({ height });

  return (
    <img
      className={classes.image}
      src="/logo.svg"
      alt="GPS TRACKER"
    />
  );
};

export default LogoImage;
