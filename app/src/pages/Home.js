import { Container } from "@mui/system";
import NavigationComponent from "../components/NavigationComponent";
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Home = () => {
    
    const handleClick = () => {
        console.log('testing')
    }
    
    const navs = [{
        label : "Explore",
        icon : <ExploreIcon />,
        onclick : handleClick
    },
    {
        label : "Messages",
        icon : <ForumIcon/>,
        onclick : handleClick
    },
    {
        label : "Profile",
        icon : <AccountCircleIcon/>,
        onclick : handleClick
    },
]

    return (
        <>
            <Container>
                {/* <SimpleBottomNavigation/> */}
                <NavigationComponent navs={navs}/>  
            </Container>
        </>
    )
}

export default Home;