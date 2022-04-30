import "./App.scss";
import { useState } from "react";
import Results from "./components/Results";
import Form from "./components/Form";

// import Form from "./components/Form";
// import Results from "./components/Results";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [valid, setValid] = useState(false);


  console.log(username);
 
  return (

    <div className="App">
       
    {valid === false ?
    
    <Form
    username = {username}
    setUsername = {setUsername}
    email = {email}
    setEmail = {setEmail}
    password = {password}
    setPassword = {setPassword}
    confirmPassword = {confirmPassword}
    setConfirmPassword = {setConfirmPassword}
    valid = {valid}
    setValid = {setValid}
    />
    
    : 
    
    <Results
    username = {username}
    email = {email}
    password = {password}
    setValid = {setValid}
    />

    }

    </div>
  );
}

export default App;
