import React from "react";
import { Card, List } from "antd";
import { inject, observer } from "mobx-react";

@inject('ui') @observer
export default class IndexCard extends React.Component<any, any> {
    componentDidMount(): void {
    }

    render() {
        let { exList } = this.props.ui
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
                    }} dataSource={ exList } renderItem={ item => (
                        <List.Item>
                            <img src='/logo.png' alt="" width="100%" height="100%"/>
                        </List.Item>
                    )}/>
                </Card>
            </div>
        )
    }
}



