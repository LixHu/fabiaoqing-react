import React from 'react';
import IndexCard from "../../component/IndexCard";
import LeftFlex from "../../component/LeftFlex";
import RightBorder from "../../component/RightBorder";
const leftMenu = [ 124, 567, 8999 ];
const buttonList = [
    { title: '不知道111111111111111111111', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
    { title: '不知道', link: '123' },
]
class Home extends React.PureComponent {

    render() {
        return(
            <div>
                <IndexCard />
                <LeftFlex data={ leftMenu } />
                <RightBorder list={ buttonList } />
            </div>
        );
    }
}

export default Home;