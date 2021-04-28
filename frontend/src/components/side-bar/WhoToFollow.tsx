import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../store';
import { IUser } from '../../types';
import Creator from '../hero/Creator';

function WhoToFollow() {
      const { users } = useSelector(userSelectors);
    return (
      <div>
        <h3>WHO TO FOLLOW</h3>
        <ListGroup>
          {users.slice(0, 3).map((user: IUser) => {
            return <Creator key={`creators-to-follow-${user._id}`} {...user} />;
          })}
        </ListGroup>
      </div>
    );
}

export default WhoToFollow
