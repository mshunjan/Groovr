import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import Paper from '@mui/material/Paper';

import SimpleBottomNavigation from "../components/SimpleBottomNavigation";

import profile1 from '../images/profile1.jpg';

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
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
                        zIndex: 1,
                        bottom: 0,
                        left: 0,
                        position: 'absolute',
                        overflowX: 'hidden'
                    },
                }}
            >
                <Paper variant="outlined">
                    height
                </Paper>
            </Box>

            <SimpleBottomNavigation />
        </Container>
    );
}
