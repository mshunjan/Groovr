import { Typography, Box, Card, Stack, CardActionArea, Avatar, Fade } from '@mui/material';
import Container from '@mui/material/Container';

import masterprofile from '../images/masterprofile.jpg';

import { useState, useRef, useEffect } from 'react';

const Profile = () => {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        padding: 20,
    };

    const [checked, setChecked] = useState(false);
    const containerRef = useRef(null);

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
                            Mariah
                        </Typography>
                        <Avatar src={masterprofile} sx={{ width: 200, height: 200, }} />
                    </Box>
                    <Stack direction="column" spacing={2.5} pt={5}>
                        <CardActionArea>
                            <Card style={cardStyle}>
                                <Stack direction="row" spacing={2} justifyContent={"center"} alignItems={'center'}>
                                    <Typography >
                                        Edit Profile
                                    </Typography>
                                </Stack>
                            </Card>
                        </CardActionArea>

                        <CardActionArea>
                            <Card style={cardStyle}>
                                <Stack direction="row" spacing={2} justifyContent={"center"} alignItems={'center'}>
                                    <Typography >
                                        Preferences
                                    </Typography>
                                </Stack>
                            </Card>
                        </CardActionArea>

                        <CardActionArea>
                            <Card style={cardStyle}>
                                <Stack direction="row" spacing={2} justifyContent={"center"} alignItems={'center'}>
                                    <Typography >
                                        Settings
                                    </Typography>
                                </Stack>
                            </Card>
                        </CardActionArea>
                    </Stack>
                </Box>
            </Fade>
        </Container>
    );
}

export default Profile;