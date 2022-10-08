import { Chip, List, FriendsWrapper } from './FriendList.styled';
import { FaCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <FriendsWrapper>
      {friends.map(friend => {
        return (
          <List isOnline={friend.isOnline} key={friend.id}>
            <Chip isOnline={friend.isOnline}>
              <FaCircle />
            </Chip>
            <img src={friend.avatar} alt={friend.name} width="70" />
            <p>{friend.name}</p>
          </List>
        );
      })}
    </FriendsWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
