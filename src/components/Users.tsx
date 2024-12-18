type userType = {
  name: string;
  age: number;
};

type usersType = {
  users: userType[];
};

const Users = (props: usersType) => {
  return (
    <div>
      {props.users.map((user, key) => (
        <div className="users" key={key}>
          <p>{`Name: ${user.name} - Age: ${user.age}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
