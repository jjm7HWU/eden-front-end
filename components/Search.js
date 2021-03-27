import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, View, Text } from 'react-native';
import NavBar from "./NavBar";
import Post from "./Post";
import ProfileCard from "./ProfileCard";
import TextInputPair from "./TextInputPair";
import { DOMAIN_NAME, appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { postMethodFetch } from "../functions";
import { buttonStyle, flexbox } from "./styles";

function Search({ navigation }) {

  const [searchQuery,setSearchQuery] = useState("");
  const [userSearchResults,setUserSearchResults] = useState([]);
  const [challengeSearchResults,setChallengeSearchResults] = useState([]);
  const [postContent,setPostContent] = useState([]);

  const submit = () => {
    const submission = {
      sourceUser: "Mitch55",
      terms: searchQuery.split(" ")
    };
    postMethodFetch(submission, "/post/search", (res) => {
      setUserSearchResults(res[0].data);
      setChallengeSearchResults(res[2].data);

      // render posts
      let refArgs = res[1].data.map(item => item).join("+");
      if (refArgs.length !== 0) {
	fetch(`${DOMAIN_NAME}/api/photo/${refArgs}`)
	.then(res => res.json())
	.then(data => {
	  console.log("SEARCH");
	  console.log(data);
	  setPostContent(data);
	});
      }
    });
  };

  const updateData = (activity) => {
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
	{postContent.map(item => (
	  <Post navigation={navigation} data={item}/>
	))}
      </ScrollView>
      <NavBar navigation={navigation}/>
    </View>
  );

}

const styles = StyleSheet.create({
});

export default Search;
