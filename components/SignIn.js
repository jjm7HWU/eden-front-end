import React, { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import NavBar from "./NavBar";
import TextInputPair from "./TextInputPair";
import { appBodyStyle, scrollViewStyle } from "../global-variables";
import { postMethodFetch } from "../functions";
import { buttonStyle } from "./styles";

function SignIn({ navigation }) {

  const [emailInput,setEmailInput] = useState("");
  const [passwordsInput,setPasswordInput] = useState("");
  const [error,setError] = useState("");

  const submit = () => {
    const submission = { email, username, password1, password2 }
    postMethodFetch(submission, "/post/sign-in", (res) => {
      console.log(res);
      if (res.valid) {

      }
      else {
	setError(res.message);
      }
    });
  };

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	<Text>{error}</Text>
	<TextInputPair heading="Email" onChangeText={ setEmailInput } />
	<TextInputPair heading="Password" onChangeText={ setPasswordInput } />
	<Button title="Sign In" style={buttonStyle} onPress={() => submit()}/>
      </ScrollView>
      <NavBar navigation={navigation}/>
    </View>
  );

}

export default SignIn;
