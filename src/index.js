import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails'
import ApprovalCard from './ApprovalCard';



const App = () => {
    return (<div className="ui container comments">
        <br />
        <ApprovalCard>
            <CommentDetails author="Saim" dated="Today at 7:00 pm" tt="Nice Post Dear" avatar={faker.image.avatar()} />
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetails author="Dawar" dated="Yesterday at 9:00 pm" tt="Fantastic" avatar={faker.image.avatar()} />
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetails author="Mikeal" dated="Today at 8:00 pm" tt="Aamzing" avatar={faker.image.avatar()} />
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetails author="Yahya" dated="Today at 7:00 pm" tt="Wow" avatar={faker.image.avatar()} />
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetails author="Bazib" dated="Today at 7:00 pm" tt="Adorabe" avatar={faker.image.avatar()} />
        </ApprovalCard>
        
    </div>
        
        
);

}

ReactDOM.render(<App />, document.querySelector('#root'));