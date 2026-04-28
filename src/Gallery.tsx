import Profile from "./Profile";
import { profileData } from "./utils";

const Gallery = () => {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile {...profileData[0]} />
      <Profile {...profileData[1]} />
    </div>
  );
};

export default Gallery;
