const FunUser = (props) => {
  const { name, location } = props;
  return (
    <div>
      <h1>Name : {name}</h1>
      <p>Location :{location}</p>
    </div>
  );
};

export default FunUser;
