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

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (password === confirmPassword) {
  //     setValid(true);
  //   } else {
  //     alert("Les mots de passe ne sont pas identiques !!");
  //   }
  // };
  console.log(username);
 
  return (
    <div className="App">
       
    <Form
    username = {username}
    setUsername = {setUsername}
    email = {email}
    setEmail = {setEmail}
    password = {password}
    setPassword = {setPassword}
    confirmPassword = {confirmPassword}
    setConfirmPassword = {setConfirmPassword}
    />




    <Results
    username = {username}
    email = {email}
    password = {password}
    setValid = {setValid}
    />
        

    </div>
  );
}

export default App;
