import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';

const theme = createTheme();

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
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main', marginBottom: 5 }}>
                    </Avatar>
                    <Typography component="h1" variant="h6">
                        Sign Up to Continue
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} m={3}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 1 }}
                        >
                            Continue with email
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 1, mb: 3 }}
                        >
                            Use phone number
                        </Button>

                        <Divider>
                            or log-in with
                        </Divider>
                    </Box>
                    <Stack direction="row" spacing={3} >
                        <Button
                            type="submit"
                            variant="outlined"
                            size="large"
                        >
                            <FacebookIcon />
                        </Button> 
                        <Button
                            type="submit"
                            variant="outlined"
                            size="large"
                        >
                            <GoogleIcon />
                        </Button> 
                        <Button
                            type="submit"
                            variant="outlined"
                            size="large"
                        >
                            <AppleIcon />
                        </Button> 
                    </Stack>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
