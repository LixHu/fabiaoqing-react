import React from 'react';
import CardComponent from "../../component/indexCard";
import LeftFlexComponent from "../../component/LeftFlexComponent";
const data = [123, 321, 123, 123, 123, 123];
const leftMenu = [ 124,567,8999 ];

class Home extends React.PureComponent {

    render() {
        return(
            <div>
                <CardComponent Items={ data } />
                <LeftFlexComponent data={ leftMenu } />
            </div>
        );
    }
}

export default Home;