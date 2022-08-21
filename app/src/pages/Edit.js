import { Typography, Box, Fade, Card, CardContent, Stack, Button } from '@mui/material';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import masterprofile from '../images/masterprofile.jpg';
import zarina1 from '../images/zarina1.jpg';
import zarina3 from '../images/zarina3.jpg';

import albumart from '../images/albumart.jpg'

import ModeIcon from '@mui/icons-material/Mode';
import Skeleton from '@mui/material/Skeleton';
import { useState, useRef, useEffect } from 'react';
import SimpleBottomNavigation from '../components/SimpleBottomNavigation';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        padding: 20,
    };

    const [checked, setChecked] = useState(false);
    const containerRef = useRef(null);

    const navigate = useNavigate(); 
    const itemData = [
        masterprofile, zarina1]
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <Container component="main" maxWidth="xs">
            <Fade in={checked} mountOnEnter unmountOnExit timeout={500}>
                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            flexDirection: 'column',
                        }}>
                        <Stack direction="row" justifyContent={'space-between'}>
                            <Typography variant='h5'  >
                                My Photos
                            </Typography>
                            <ModeIcon />
                        </Stack>
                        <ImageList cols={3} rowHeight={164}>
                            {itemData.map((item) => (
                                <ImageListItem >
                                    <img
                                        src={item}
                                        style={{ borderRadius: 10 }}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                            <Skeleton variant="rounded" width={117} height={164} style={{ marginLeft: 1 }} />

                        </ImageList>

                        <Card sx={{ cursor: 'pointer' }}>
                            <CardContent sx={{ mt: 2, mr: 1}}>

                                <Stack direction="row" justifyContent={'left'}>
                                    <img
                                        src={albumart}
                                        width='80px'
                                        height='80px'
                                    />
                                    <Stack direction="column">
                                        <Typography variant="h8" sx={{ fontWeight: 'bold', ml: 2, color: 'black' }} component="div">
                                            Nutshell
                                        </Typography>
                                        <Typography variant="h8" sx={{ color: 'gray', ml: 2 }}>
                                            Alice in Chains
                                        </Typography>
                                    </Stack>
                                    <PlayArrowIcon color="primary" sx={{ fontSize: '35px', marginLeft:10 }} />
                                </Stack>
                            </CardContent>
                        </Card>

                        <Button onClick={() => navigate('/Prompts')}>
                            Change my prompts
                        </Button>
                        <Box
                            sx={{
                                marginTop: 1,
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                            <Stack direction="column" spacing={2.5} >
                                <Card>
                                    <Typography variant="h8" sx={{ fontWeight: 'bold', padding: 2, fontSize: 12, backgroundColor: 'secondary.main' }} component="div">
                                        If I were an Anime character, my theme song would be :
                                    </Typography>
                                    <Card>
                                        <Typography variant="h8" sx={{ fontWeight: 'bold', padding: 2, fontSize: 12 }} component="div">
                                            Corey in the House
                                        </Typography>
                                    </Card>
                                </Card>
                                <Card>
                                    <Typography variant="h8" sx={{ fontWeight: 'bold', padding: 2, fontSize: 12, backgroundColor: 'secondary.main' }} component="div">
                                        My favorite genre of all time:
                                    </Typography>
                                    <Card>
                                        <Typography variant="h8" sx={{ fontWeight: 'bold', padding: 2, fontSize: 12 }} component="div">
                                            Pop
                                        </Typography>
                                    </Card>
                                </Card>
                                <Card>
                                    <Typography variant="h8" sx={{ fontWeight: 'bold', padding: 2, fontSize: 12, backgroundColor: 'secondary.main' }} component="div">
                                        A song that has meaning to you:
                                    </Typography>
                                    <Card>
                                        <Typography variant="h8" sx={{ fontWeight: 'bold', padding: 2, fontSize: 12 }} component="div">
                                            Crab Rave
                                        </Typography>
                                    </Card>
                                </Card>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Container>
    );
}

export default Edit;