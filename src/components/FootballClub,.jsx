function FootballClub(props) {
  console.log(props);

  const { name, country } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>{country}</p>
    </div>
  );
}

export default FootballClub;
