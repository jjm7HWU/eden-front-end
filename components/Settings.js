import React, { useState } from 'react';
import { Button, ScrollView, View } from 'react-native';
import NavBar from "./NavBar";
import TextInputPair from "./TextInputPair";
import { appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { postMethodFetch } from "../functions";
import { buttonStyle } from "./styles";

function Settings({ navigation }) {

  const [username,setUsernameInput] = useState("");
  const [area,setAreaInput] = useState("");
  const [country,setCountryInput] = useState("");
  const [bio,setBioInput] = useState("");

  const submit = () => {
    const submission = { username, area, country, bio }
    postMethodFetch(submission, "/api_custom/account", (res) => {
      console.log(res)
    });
  };

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	<TextInputPair heading="Username" onChangeText={ setUsernameInput } />
	<TextInputPair heading="Area" onChangeText={ setAreaInput } />
	<TextInputPair heading="Country" onChangeText={ setCountryInput } />
	<TextInputPair heading="Bio" onChangeText={ setBioInput } />
	<Button title="Update Settings" style={buttonStyle} onPress={() => submit()}/>
      </ScrollView>
      <NavBar navigation={navigation}/>
    </View>
  );

}

export default Settings;
