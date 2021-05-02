import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail  author="Sam" timeAgo="Today at 4:45pm" comments="Nice Tips" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="James" timeAgo="Today at 2:25pm" comments="Amazing" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail  author="Karl"timeAgo="Today at 3:56pm" comments="Nice Post" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));