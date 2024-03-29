import "./App.css";

const User = ({ data }) => {
  return (
    <div>
      {data &&
        data.map((user, index) => (
          <div className="userCover" key={index}>
            <p className="user">First Name: {user.firstName}</p>
            <p className="user">Last Name: {user.lastName}</p>
            <p className="user">Select Value: {user.select.value}</p>
            <p className="user">Select Label: {user.select.label}</p>
          </div>
        ))}
    </div>
  );
};

export default User;
