import React from 'react';
import { Button } from "antd";
import './index.scss';

interface BorderInterface {
    list: Array<{ title: string , link?: string }>
}


class RightBorder extends React.Component<BorderInterface, any> {
    toLink() {

    }

    render() {
        return (
            <div className="right-boder">
                { this.props.list.map((val, key) => (
                    <div className="btn">
                        <Button onClick={ this.toLink.bind(this, val.link)} key={ key } size="small">{ val.title }</Button>
                    </div>
                ))}
            </div>
        )
    }
}


export default RightBorder