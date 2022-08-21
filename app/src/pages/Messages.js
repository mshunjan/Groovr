import { Typography, Box, Card, Stack, CardMedia, CardActionArea, CardContent } from '@mui/material';
import Container from '@mui/material/Container';

const Messages = () => {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        padding: 20
    };

    const data = [{
        // image: 'test',
        message: "I've been listening to grunge recently!"
    }]
    
    return (
        <Container component="main" maxWidth="xs">
            <Typography variant={'h6'} pt={5} pb={3}>
                Messages
            </Typography>
            <Stack direction="column" spacing={3} >
                {data.map(point =>
                    <CardActionArea>
                        <Card style={cardStyle}>
                            <Stack direction="row" >
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={point.image}
                                />
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography >
                                        {point.message}
                                    </Typography>
                                </CardContent>
                            </Stack>
                        </Card>

                    </CardActionArea>
                )}
            </Stack>
        </Container>
    );
}

export default Messages;