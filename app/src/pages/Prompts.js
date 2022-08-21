import * as React from 'react';

import { Typography, Box, Card, Stack, CardMedia, CardActionArea, CardContent, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import SimpleBottomNavigation from "../components/SimpleBottomNavigation";
import { purple } from '@mui/material/colors';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import album1 from '../images/album1.png';
import album2 from '../images/album2.jpg';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));


export default function Prompts() {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (e) => {
        if (e.key === 'Enter') {
            setOpen(true);
        }
    };


    React.useEffect(() => {
    }, []);

    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        padding: 20,
        color: 'white',
        wordWrap: "break-word"
    };

    const albumCardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        color: 'white',
        marginLeft: '15px',
        marginRight: '15px',
        wordWrap: "break-word"
    };

    const data = [
        "The best song to describe me is", "If I could only listen to one artist for the rest of my life, I'd choose", "A playlist of my life would be something like this", "I know every word to ", "My karaoke go-to is"
    ]

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Typography variant={'h6'} pt={5} pb={3} sx={{ textAlign: 'center' }}>
                    About You
                </Typography>
                <Stack direction="column" spacing={3} >
                    {data.map((point, id) =>
                        <CardActionArea>
                            <Card style={cardStyle} sx={{
                                backgroundImage: `linear-gradient(to bottom right, rgb(${(20 * id) + 107},27,${(20 * id) + 154}), rgb(${(20 * id) + 150},100,${(20 * id) + 1805}))`,
                            }}>
                                <ClearIcon sx={{ position: 'absolute', top: '0.3em', right: '0.3em', pointer: 'cursor' }} />
                                <Stack direction="row" >
                                    <CardContent sx={{ mt: 2, mr: 1 }}>
                                        <Typography style={{ wordWrap: "break-word" }}>
                                            {point}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end', color: 'white' }}>
                                            <SearchIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                                            <TextField id="input-with-sx" style={{ color: 'white' }} label="Search" variant="standard" onKeyDown={toggleDrawer} />
                                        </Box>
                                    </CardContent>
                                </Stack>
                            </Card>

                        </CardActionArea>
                    )}
                </Stack>
            </Container>
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={true}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0
                    }}
                >
                </StyledBox>
                <StyledBox onClick={() => { setOpen(false) }} sx={{ borderRadius: '25px' }}
                >
                    <Puller onClick={() => { setOpen(false) }} />
                    <Typography sx={{ p: 2, color: 'text.secondary' }}>5 results</Typography>
                    <Stack direction="column" spacing={1}>

                        <Card style={albumCardStyle}>
                            <CardContent sx={{ mt: 2, mr: 1 }}>

                                <Stack direction="row" >
                                    <img
                                        src={album1}
                                        width='80px'
                                        height='80px'
                                    />
                                    <Stack direction="column">
                                        <Typography variant="h8" sx={{ fontWeight: 'bold', ml: 2, color: 'black' }} component="div">
                                            Some Girls Are Bigger Than Others
                                        </Typography>
                                        <Typography variant="h8" sx={{ color: 'gray', ml: 2 }}>
                                            The Smiths
                                        </Typography>
                                    </Stack>
                                    <PlayArrowIcon color="primary" sx={{fontSize: '35px', bottom: '0px', right: '10px'}}/>
                                </Stack>
                            </CardContent>
                        </Card>

                        <Card style={albumCardStyle}>
                            <CardContent sx={{ mt: 2, mr: 1 }}>

                                <Stack direction="row" >
                                    <img
                                        src={album2}
                                        width='80px'
                                        height='80px'
                                    />
                                    <Stack direction="column">
                                        <Typography variant="h8" sx={{ fontWeight: 'bold', ml: 2, color: 'black' }} component="div">
                                            This Charming Man
                                        </Typography>
                                        <Typography variant="h8" sx={{ color: 'gray', ml: 2 }}>
                                            The Smiths
                                        </Typography>
                                    </Stack>
                                    <PlayArrowIcon color="primary" sx={{fontSize: '35px', bottom: '0px', right: '10px'}}/>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Stack>
                </StyledBox>
            </SwipeableDrawer>
            <SimpleBottomNavigation />
        </>
    );
}
