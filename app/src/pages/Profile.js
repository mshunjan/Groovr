import { Typography, Box, Card, Stack, CardActionArea, Avatar } from '@mui/material';
import Container from '@mui/material/Container';

import masterprofile from '../images/masterprofile.jpg';


const Profile = () => {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        padding: 20,
    };
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 15,
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
        </Container>
    );
}

export default Profile;