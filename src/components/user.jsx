function User(props) {
  console.log(props);

  const { name, age, gender, address } = props;

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default User;
