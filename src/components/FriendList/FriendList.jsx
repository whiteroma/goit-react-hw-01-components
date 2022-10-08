import { Chip, List, FriendsWrapper } from './FriendList.styled';
import { FaCircle } from 'react-icons/fa';

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

export default FriendList;
