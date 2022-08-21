import { Typography, Box, Card, Stack, CardActionArea, Avatar, Fade, Button } from '@mui/material';
import Container from '@mui/material/Container';

import masterprofile from '../images/masterprofile.jpg';

import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        padding: 20,
    };

    const [checked, setChecked] = useState(false);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <Container component="main" maxWidth="xs">
            <Fade in={checked} mountOnEnter unmountOnExit timeout={500}>
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Typography variant='h5' pb={3}>
                            Mary
                        </Typography>
                        <Avatar src={masterprofile} sx={{ width: 200, height: 200, }} />
                    </Box>
                    <Stack direction="column" spacing={2.5} pt={5}>
                        <Button variant='outlined'onClick={() => (navigate('/edit'))}>
                            Edit Profile
                        </Button>
                        <Button variant='outlined'>
                            Preferences
                        </Button>
                        <Button variant='outlined'>
                            Settings
                        </Button> 
                    </Stack>
                </Box>
            </Fade>
        </Container>
    );
}

export default Profile;