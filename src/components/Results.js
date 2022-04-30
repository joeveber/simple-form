const Results = ({username, email, password, setValid}) => {

return (
    <div className="results">
      <h1>Vos infos !</h1>
      <p>{username}</p>
      <p>{email}</p>
      <p>{password}</p>
      <button
        onClick={() => {
          setValid(false);
        }}
      >
        Edit your informations
      </button>
    </div>
);

}

export default Results;