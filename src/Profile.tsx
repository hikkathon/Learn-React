import { getImageUrl, type ProfileProps } from "./utils";

const Profile = (data: ProfileProps) => {
  return (
    <section className="profile">
      <h2>{data.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(data.avatarId)}
        alt={data.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {data.profession}
        </li>
        <li>
          <b>Awards: {data.awards.length} </b>(
          {data.awards.map((value) => value)})
        </li>
        <li>
          <b>Discovered: </b>
          {data.discovered}
        </li>
      </ul>
    </section>
  );
};

export default Profile;
