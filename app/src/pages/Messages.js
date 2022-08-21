import { Typography, Box, Card, Stack, CardActionArea, Avatar } from '@mui/material';
import Container from '@mui/material/Container';
import profile1 from '../images/profile1.jpg';

const Messages = () => {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        padding: 20
    };

    const data = [{
        image: profile1,
        message: "I've been listening to grunge ..."
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
                            <Stack direction="row" spacing={2} justifyContent={"center"} alignItems={'center'}>
                                <Avatar src={point.image}/>
                                <Typography >
                                    {point.message}
                                </Typography>
                            </Stack>
                        </Card>

                    </CardActionArea>
                )}
            </Stack>
        </Container>
    );
}

export default Messages;