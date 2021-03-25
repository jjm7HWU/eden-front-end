import React, { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import NavBar from "./NavBar";
import TextInputPair from "./TextInputPair";
import { appBodyStyle, scrollViewStyle } from "../global-variables";
import { postMethodFetch } from "../functions";
import { buttonStyle } from "./styles";

function Registration({ navigation }) {

  const [email,setEmailInput] = useState("");
  const [username,setUsernameInput] = useState("");
  const [password1,setPassword1Input] = useState("");
  const [password2,setPassword2Input] = useState("");
  const [emailError,setEmailError] = useState("");
  const [usernameError,setUsernameError] = useState("");
  const [passwordError,setPasswordError] = useState("");

  const submit = () => {
    const submission = { email, username, password1, password2 }
    postMethodFetch(submission, "/post/register", (res) => {
      console.log(res);
      if (res.valid) {

      }
      else {
	setEmailError(res.messages["email"]);
	setUsernameError(res.messages["username"]);
	setPasswordError(res.messages["password"]);
      }
    });
  };

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	<Text>{emailError}</Text>
	<TextInputPair heading="Email" onChangeText={ setEmailInput } />
	<Text>{usernameError}</Text>
	<TextInputPair heading="Username" onChangeText={ setUsernameInput } />
	<Text>{passwordError}</Text>
	<TextInputPair heading="Password" onChangeText={ setPassword1Input } />
	<TextInputPair heading="Confirm Password" onChangeText={ setPassword2Input } />
	<Button title="Update Settings" style={buttonStyle} onPress={() => submit()}/>
      </ScrollView>
      <NavBar navigation={navigation}/>
    </View>
  );

}

export default Registration;
