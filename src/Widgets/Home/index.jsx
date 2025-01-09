import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  SpeedDial,
  TextField,
  Typography
} from '@mui/material';
import {
  BannerIcon,
  ChatIcon,
  LockIcon,
  LogoIcon,
  VisibilityOffIcon,
  VisibilityOnIcon
} from '../../Global/SVG';
import logoImg from '../../Assets/logo.jpg';
import styles from './styles.css';

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Grid2 container spacing={{ md: 4, xl: 10 }} sx={styles.container}>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <Paper sx={styles.paper}>
            <Grid2 container spacing={{ xs: 1, xl: 2 }} sx={styles.loginWrap}>
              <Grid2 size={12} sx={styles.logo}>
                <Grid2 alt="logo" component="img" src={logoImg} />
              </Grid2>
              <Grid2 size={12}>
                <Typography component="p" sx={styles.header} variant="button">
                  User Login
                </Typography>
              </Grid2>
              <Grid2 size={10}>
                <TextField fullWidth label="Business Email Id" type="text" />
              </Grid2>
              <Grid2 size={10}>
                <TextField
                  fullWidth
                  label="Password"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityOnIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                  type={showPassword ? 'text' : 'password'}
                />
              </Grid2>
              <Grid2 size={10} textAlign="left">
                <FormControlLabel control={<Checkbox />} label="Remember me" />
              </Grid2>
              <Grid2 size={10}>
                <Link href="#" sx={styles.rememberMe}>
                  Don’t remember your password?
                </Link>
              </Grid2>
              <Grid2 size={10}>
                <Button
                  disableElevation
                  sx={styles.loginBtn}
                  variant="contained"
                >
                  Login
                </Button>
              </Grid2>
              <Grid2 alignSelf="flex-end" size={12}>
                <Grid2
                  alignItems="center"
                  container
                  justifyContent="center"
                  sx={styles.privacy}
                >
                  <LockIcon height={18} width={18} />
                  <Typography sx={{ ml: '0.5rem' }}>
                    Your security is our priority
                  </Typography>
                </Grid2>
              </Grid2>
            </Grid2>
          </Paper>
        </Grid2>
        <Grid2 size={3} sx={styles.message}>
          <Typography component="h6" sx={styles.motto} variant="h4">
            The smartest way for your patients to pay for their smiles.
          </Typography>
          <Typography component="p" sx={styles.caption} variant="body1">
            Introducing a remarkable set of new features that simplify and
            accelerate everyday tasks performed in the Portal. Providers have
            even greater visibility and control over flexible financing offered
            through the iCreditWorks native mobile App!
          </Typography>
        </Grid2>
        <Grid2 size={5.5} sx={styles.imagesWrap}>
          <LogoIcon sx={styles.logoIcon} />
          <BannerIcon
            height={{ xs: 'auto', xl: 800 }}
            sx={styles.bannerIcon}
            width={{ xs: 'auto', xl: 900 }}
          />
        </Grid2>
      </Grid2>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={
          <ChatIcon
            height="120%"
            sx={{
              fill: '#CECECE'
            }}
            width="120%"
          />
        }
        sx={styles.speedDial}
      />
    </React.Fragment>
  );
};

Home.propTypes = {};

export default Home;
