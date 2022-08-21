import { Typography, Box, Card, Stack, CardActionArea, Avatar } from '@mui/material';
import Container from '@mui/material/Container';

import profile1 from '../images/sample_message_profiles/profile1.jpg';
import profile2 from '../images/sample_message_profiles/profile2.jpg';
import profile3 from '../images/sample_message_profiles/profile3.jpg';
import profile4 from '../images/sample_message_profiles/profile4.jpg';
import profile5 from '../images/sample_message_profiles/profile5.jpg';
import profile6 from '../images/sample_message_profiles/profile6.jpg';
import profile7 from '../images/sample_message_profiles/profile7.jpg';


const Messages = () => {
    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        padding: 20
    };

    const data = [{
        image: profile1,
        message: "I've been listening to grunge ..."
    },
    {
        image: profile2,
        message: "No way! I didn't know you ..."
    },
    {
        image: profile3,
        message: "Probably 5 or 6, I think ..."
    },
    {
        image: profile4,
        message: "Haha yea"
    },
    {
        image: profile5,
        message: "I hate sand cause it gets ..."
    },
    {
        image: profile6,
        message: "It really was the best conc..."
    },
    {
        image: profile7,
        message: "Alice in Chains for sure"
    },
    
]

    return (
        <Container component="main" maxWidth="xs">
            <Typography variant={'h6'} pt={5} pb={3}>
                Messages
            </Typography>
            <Stack direction="column" spacing={2.5} >
                {data.map(point =>
                    <CardActionArea>
                        <Card style={cardStyle}>
                            <Stack direction="row" spacing={2} justifyContent={"left"} alignItems={'center'}>
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