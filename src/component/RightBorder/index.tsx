import React from 'react';
import { Button } from "antd";
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
                    <Button onClick={ this.toLink.bind(this, val.link)}>{ val.title }</Button>
                ))}
            </div>
        )
    }
}


export default RightBorder