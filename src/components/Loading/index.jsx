import React, {Component} from 'react';
import {Spin} from "antd";


class Loading extends Component {
    render() {
        const {loading} = this.props
        return (
            <div>
                <div className={loading === true ? 'loadingArea' : ''}/>
                <Spin size="large" spinning={loading} className='loadingIcon'/>
            </div>
        );
    }
}

export default Loading;