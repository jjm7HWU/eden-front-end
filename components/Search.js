import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, View, Text } from 'react-native';
import NavBar from "./NavBar";
import Post from "./Post";
import ProfileCard from "./ProfileCard";
import TextInputPair from "./TextInputPair";
import { appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { postMethodFetch } from "../functions";
import { buttonStyle, flexbox } from "./styles";

function Search({ navigation }) {

  const [searchQuery,setSearchQuery] = useState("");
  const [userSearchResults,setUserSearchResults] = useState([]);
  const [postSearchResults,setPostSearchResults] = useState([]);
  const [challengeSearchResults,setChallengeSearchResults] = useState([]);

  const submit = () => {
    const submission = {
      sourceUser: "Mitch55",
      terms: searchQuery.split(" ")
    };
    postMethodFetch(submission, "/post/search", (res) => {
      setUserSearchResults(res[0].data);
      setPostSearchResults(res[1].data);
      setChallengeSearchResults(res[2].data);
    });
  };

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	<View style={flexbox}>
	  <TextInputPair heading="Search" onChangeText={setSearchQuery} />
	  <Button title="Search" style={buttonStyle} onPress={() => submit()}/>
	</View>
	{userSearchResults.map(user => (
	  <ProfileCard username={user}/>
	))}
	{challengeSearchResults.map(challenge => (
	  <Text>{post}</Text>
	))}
	{postSearchResults.map(item => (
	  <Post navigation={navigation} data={{ ref: item }}/>
	))}
      </ScrollView>
      <NavBar navigation={navigation}/>
    </View>
  );

}

const styles = StyleSheet.create({
});

export default Search;
