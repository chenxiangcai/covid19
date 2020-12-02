import React, {Component} from 'react';
import DocumentTitle from 'react-document-title'

class Error404 extends Component {
    render() {
        return (
            <DocumentTitle title='出错啦~'>
                404
            </DocumentTitle>
        );
    }
}

export default Error404;