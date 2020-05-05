import React from "react";
import { Card, List } from "antd";

export interface CardInterface { Items?: Array<any> }

export default class IndexCard extends React.Component<CardInterface, any> {
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
                    }} dataSource={ this.props.Items } renderItem={ item => (
                        <List.Item>
                            <img src='/logo.png' alt="" width="100%" height="100%"/>
                        </List.Item>
                    )}/>
                </Card>
            </div>
        )
    }
}



