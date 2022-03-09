import { useEffect, useState } from 'react';
import { followProfile, unfollowProfile } from '../../services/profileApi';

const FollowButton = ({ profile }) => {

  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    setIsFollowing(profile.isFollowing);
  }, [profile]);

  const handleFollow = async username => {
    try {
      await followProfile(encodeURIComponent(username));
      setIsFollowing(true);
    }
    catch {
      alert('Something went wrong!');
    }
  }

  const handleUnfollow = async username => {
    try {
      await unfollowProfile(encodeURIComponent(username));
      setIsFollowing(false);
    }
    catch {
      alert('Something went wrong!');
    }
  }

  return (
    <>
      {!isFollowing &&
        <button className='btn btn-sm btn-outline-success ms-2' onClick={() => handleFollow(profile.username)}>
          <i className='bi bi-plus-lg'></i> Follow
        </button>}
      {isFollowing &&
        <button className='btn btn-sm btn-success ms-2' onClick={() => handleUnfollow(profile.username)}>
          <i className='bi bi-check-lg'></i> Follow
        </button>}
    </>
  );
}

export default FollowButton;
