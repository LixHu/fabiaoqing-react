import React from "react";
import {Card, List} from "antd";


class CardComponent extends React.Component<any, any> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props: Array<any>) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card title="最新表情" style={{ width: "70%" }}>
                    <List  grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }} dataSource={ this.props.Item } renderItem={ item => (
                        <List.Item>
                            <img src='/logo.png' alt="" width="100%" height="100%"/>
                        </List.Item>
                    )}/>
                </Card>
            </div>
        )
    }
}

export default CardComponent

