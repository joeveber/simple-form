const Form = ({username, setUsername, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, valid, setValid}) => {

return (

    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h1>Write your infos</h1>
      <input
        type="text"
        placeholder="Your Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        value={username}
      />
      <input
        type="email"
        placeholder="Your Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
      />
      <input
        type="password"
        placeholder="Your password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
      />
      <input
        type="password"
        placeholder="Confirm your password"
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
        value={confirmPassword}
      />
      <button
      onClick={() => {;
        {password === confirmPassword ? setValid(true) : alert("Passwords don't match")}
      }}
      >SUBMIT</button>
    </form>

)

};

export default Form;