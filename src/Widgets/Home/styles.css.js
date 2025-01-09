import backgroundImg from '../../Assets/background';

const styles = {
  container: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: '65% 50%',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  paper: {
    bgcolor: 'common.white',
    color: 'common.black'
  },
  loginWrap: {
    height: { xs: '100vh', md: '100%' },
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  logo: { borderBottom: '5px solid', borderColor: '#EA731F' },
  header: { fontWeight: 'bold' },
  rememberMe: { color: '#486082', textDecoration: 'none' },
  loginBtn: {
    px: '5rem',
    color: 'white',
    fontWeight: 'bold',
    my: '1.5rem'
  },
  privacy: {
    bgcolor: '#5E6B75',
    py: '0.5rem',
    color: 'white'
  },
  message: { display: { xs: 'none', md: 'block' } },
  motto: { fontWeight: 'bolder', mb: '1rem', color: 'white' },
  caption: { color: 'white' },
  imagesWrap: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: { xs: 'none', md: 'block' }
  },
  speedDial: { position: 'absolute', bottom: 16, right: 16 },
  bannerIcon: {
    position: 'absolute',
    left: -185,
    top: { xs: 75, md: 125, xl: 200 }
  },
  logoIcon: { position: 'absolute', left: 50 }
};

export default styles;
