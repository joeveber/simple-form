const Form = (username, setUsername, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword) => {

return (

    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
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
      <input type="submit" value="Submit" />
    </form>

)

};

export default Form;