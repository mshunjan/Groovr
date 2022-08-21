import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { purple } from '@mui/material/colors';


import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import SimpleBottomNavigation from "../components/SimpleBottomNavigation";

import profile1 from '../images/profile1.jpg';

export default function Explore() {

    const [checked, setChecked] = React.useState(false);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundImage: `url(${profile1})`,
                        height: '100vh',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        overflow: 'hidden'

                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                                width: '100%',
                                height: '75%',
                                bottom: 0,
                                left: 0,
                                position: 'absolute',
                                overflow: 'hidden',
                                borderRadius: '30px',
                                boxSizing: 'border-box',
                                padding: '30px'
                            },
                        }}
                    >
                        <Paper variant="outlined">

                            <Typography variant="h5" sx={{ mt: 7, fontWeight: 'bold' }} component="div">
                                Kay Oss, 25
                            </Typography>
                            <Typography sx={{ fontSize: 14, mb: 3 }} color="text.secondary" gutterBottom>
                                Rap God
                            </Typography>

                            <Stack direction="row" spacing={22}>
                                <Typography variant="h8" sx={{ fontWeight: 'bold' }} component="div">
                                    Location
                                </Typography>
                                <Chip icon={<LocationOnOutlinedIcon />}
                                    label="8km" variant="outlined" sx={{ backgroundColor: purple[100], border: 'none', color: purple[800], fontWeight: 'bold', borderRadius: '8px' }} color="primary" />
                            </Stack>
                            <Typography sx={{ fontSize: 14, mb: 3 }} color="text.secondary" gutterBottom>
                                Toronto, ON
                            </Typography>


                            <Typography variant="h8" sx={{ fontWeight: 'bold', mb: 2 }} component="div">
                                About
                            </Typography>
                            <Typography variant="body2" sx={{ marginRight: '25%' }}>
                                If you ever need a bubble tea recommendation, I'm your girl, I like...
                            </Typography>
                            <Typography sx={{ fontSize: 13, fontWeight: 'bold', color: purple[500], mb: 3 }}>
                                Read more
                            </Typography>

                            <Typography variant="h8" sx={{ fontWeight: 'bold', mb: 2 }} component="div">
                                Genres
                            </Typography>
                            <Grid container spacing={{ xs: 1 }} columns={{ xs: 12 }}>
                                <Grid xs={4}>
                                    <Chip icon={<DoneAllIcon />} label="Pop Punk" variant="outlined" sx={{ borderRadius: '8px', borderColor: 'red', color: 'red', fontWeight: '600', width: '100%' }} color="primary" />
                                </Grid>
                                <Grid xs={4}>
                                    <Chip icon={<DoneAllIcon />} label="EDM" variant="outlined" sx={{ borderRadius: '8px', borderColor: 'red', color: 'red', fontWeight: '600', width: '100%' }} color="primary" />
                                </Grid>
                                <Grid xs={4}>
                                    <Chip icon={<DoneAllIcon />} label="Country" variant="outlined" sx={{ borderRadius: '8px', fontWeight: '600', width: '100%' }} />
                                </Grid>
                                <Grid xs={4}>
                                    <Chip icon={<DoneAllIcon />} label="Rock" variant="outlined" sx={{ borderRadius: '8px', fontWeight: '600', width: '100%' }} />
                                </Grid>
                                <Grid xs={4}>
                                    <Chip icon={<DoneAllIcon />} label="Reggae" variant="outlined" sx={{ borderRadius: '8px', fontWeight: '600', width: '100%' }} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>

                </Container >
            </Slide>

            <SimpleBottomNavigation />
        </>
    );
}
