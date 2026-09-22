const ProfileCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>

      <div>
        {props.children}
      </div>
    </div>
  );
};

export default ProfileCard;