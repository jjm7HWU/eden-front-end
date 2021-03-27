import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import { Button, Image, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { postMethodFetch } from "../functions";
import { DOMAIN_NAME, containerStyle, rem } from "../global-variables";
import { SMALL_TEXT_SIZE, flexbox, textSmall } from "./styles";
import GLOBAL from "../GLOBAL";

function Post(props) {

  const [data,setData] = useState({});
  const [comments,setComments] = useState([]);
  const [commentInput,setCommentInput] = useState("");

  const postComment = () => {
    console.log("POSTING COMMENT");
    const submission = {
      ref: props.data.ref,
      comment: commentInput,
      sourceUser: GLOBAL.USERNAME,
      key: GLOBAL.KEY
    };
    console.log(submission);
    postMethodFetch(submission, "/post/comment", res => {
      console.log(res);
    });
  }

  return (
    <View style={styles.container}>

      <View style={flexbox}>
	<Image style={styles.profilePicture} source={{ uri: `https://photography-app-content.s3.amazonaws.com/profile_pictures/${props.data.poster}` }} />
	<TouchableOpacity onPress={() => props.navigation.navigate("Profile", { username: props.data.poster })}><Text style={styles.username}>{props.data.poster}</Text></TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
	<Image
	  style={styles.image}
	  source={{ uri: `https://photography-app-content.s3.amazonaws.com/photos/${props.data.ref}` }}
	/>
      </View>

      <View style={flexbox}>
	<View style={styles.iconsContainer} >
	  <Image style={styles.icon} source={{ uri: "https://photography-app-content.s3.amazonaws.com/content/comment.svg" }} />
	  <Text style={styles.iconNumber}>{props.data.comments}</Text>
	  <Image style={styles.icon} source={{ uri: "https://photography-app-content.s3.amazonaws.com/content/heart.svg" }} />
	  <Text style={styles.iconNumber}>{props.data.hearts}</Text>
	</View>
	<View>
	  <Text style={textSmall}>{props.data.location}</Text>
	</View>
      </View>

      <Text style={textSmall}>{props.data.caption}</Text>

      {comments.map(item => <Text>{item.comment}</Text>)}

      <View>
	<TextInput
	  placeholder={"Leave a comment"}
	  onChangeText={ (text) => setCommentInput(text) }
	/>
	<Button onPress={postComment} />
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 0.8 * rem,
    marginBottom: 0.8 * rem
  },
  profilePicture: {
    width: 1.5 * rem,
    height: 1.5 * rem,
    borderRadius: 0.75 * rem
  },
  imageContainer: {
    width: "100%",
    height: 10 * rem,
    marginTop: 0.3 * rem,
    marginBottom: 0.3 * rem
  },
  image: {
    width: "100%",
    height: "100%"
  },
  username: {
    marginLeft: 0.2 * rem,
    fontSize: rem
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1
  },
  icon: {
    width: 1.2 * rem,
    height: 1.2 * rem
  },
  iconNumber: {
    fontSize: SMALL_TEXT_SIZE,
    marginLeft: 0.4 * rem,
    marginRight: 0.4 * rem
  }
});

export default Post;
