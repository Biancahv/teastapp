function User(props) {
  console.log(props);

  const { nume, varsta } = props;

  return (
    <div>
      <h2>Nume: {nume}</h2>
      <p>Varsta: {varsta}</p>
    </div>
  );
}

export default User;
