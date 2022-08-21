import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import NavigationComponent from "../components/NavigationComponent";

import Messages from "./Messages";

import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Home = () => {
    const [click, setClick] = useState({
        explore: false,
        messages: false,
        profile: false
    })

    const handleClick = (obj) => {
        Object.keys(click).forEach(v => click[v] = false)
        setClick(prevState => ({
            ...prevState,
            [obj]: true
        }))
    }

    const navs = [{
        label: "Explore",
        icon: <ExploreIcon />,
        onclick: handleClick
    },
    {
        label: "Messages",
        icon: <ForumIcon />,
        onclick: handleClick
    },
    {
        label: "Profile",
        icon: <AccountCircleIcon />,
        onclick: handleClick
    },
    ]
    useEffect(() => {
        console.log(click)
    }, [click])

    return (
        <>
            <Container>
                {/* {click.explore ?
                    <Explore />
                    :
                    null} */}
                {click.messages ?
                    <Messages />
                    :
                    null}
                {/* {click.profile ?
                    <Profile />
                    :
                    null} */}
                <NavigationComponent navs={navs} />
            </Container>
        </>
    )
}

export default Home;