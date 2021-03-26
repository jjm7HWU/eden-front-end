import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Post from "./Post";
import NavBar from "./NavBar";
import { postMethodFetch } from "../functions";
import { DOMAIN_NAME, appBodyStyle, rem, scrollViewStyle } from "../global-variables";
import { SMALL_TEXT_SIZE, buttonStyle, flexbox, text, textLarge, textSmall } from "./styles";
import GLOBAL from "../GLOBAL";

function Profile(props) {

  const [username,setUsername] = useState(props.route.params ? props.route.params.username : username || props.username || GLOBAL.USERNAME);
  const [profileData,setProfileData] = useState({})
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch(`${DOMAIN_NAME}/api/activity/${username}`)
    .then(res => res.json())
    .then(data => {
      setPosts(data.activity);
    })
    fetch(`${DOMAIN_NAME}/api/user/${username}`)
    .then(res => res.json())
    .then(data => {
      setProfileData(data);
    })
  }, [])

  const onFollow = () => {
    const submission = {
      action: "follow",
      username,
      key: GLOBAL.KEY,
      sourceUser: GLOBAL.USERNAME
    }
    postMethodFetch(submission, "/interact", res => {
      console.log(res);
    });
  }

  return (
    <>

      <ScrollView style={scrollViewStyle}>

	<View style={styles.profileHeader}>
	  <Image style={styles.mainProfilePicture} source={{ uri: `https://photography-app-content.s3.amazonaws.com/profile_pictures/${username}` }} />
	  <Text style={text}>{profileData.username}</Text>
	  <Text style={textSmall}>{profileData.area}, {profileData.country}</Text>
	  <Text style={textLarge}>{profileData.points}</Text>
	  <Text style={styles.caption}>{profileData.bio}</Text>
	</View>

	<View style={flexbox}>
	  <Text style={styles.text}>{profileData.followers} follower{profileData.followers !== 1 ? "s" : ""}</Text>
	  <Text style={styles.text}>{profileData.following} following</Text>
	  {GLOBAL.USERNAME !== username ? <TouchableOpacity onPress={() => onFollow()} style={buttonStyle}><Text style={styles.text}>Follow</Text></TouchableOpacity> : <></>}
	</View>

	{posts.map(item => (
	  <Post navigation={props.navigation} data={item} />
	))}

      </ScrollView>

      <NavBar navigation={props.navigation}/>
    </>
  );
}

const styles = StyleSheet.create({
  mainProfilePicture: {
    width: 5 * rem,
    height: 5 * rem,
    borderRadius: 2.5 * rem
  },
  profileHeader: {
    alignItems: "center",
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: SMALL_TEXT_SIZE
  },
  caption: {
    fontSize: 0.8 * rem,
    marginTop: 0.5 * rem,
    marginBottom: 0.8 * rem,
    textAlign: "center"
  }
});

export default Profile;
