import {
  ProfileWrapper,
  Description,
  Image,
  Info,
  ProfileList,
  ProfileListItem,
  Stats,
} from './Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <Description>
        <Image src={avatar} alt={username} />
        <Info>{username}</Info>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <ProfileList>
        <ProfileListItem>
          <Stats className="label">Followers</Stats>
          <Stats className="quantity">{followers}</Stats>
        </ProfileListItem>
        <ProfileListItem>
          <Stats className="label">Views</Stats>
          <Stats className="quantity">{views}</Stats>
        </ProfileListItem>
        <ProfileListItem>
          <Stats className="label">Likes</Stats>
          <Stats className="quantity">{likes}</Stats>
        </ProfileListItem>
      </ProfileList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Profile;
