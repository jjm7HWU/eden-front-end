import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DOMAIN_NAME, appBodyStyle, scrollViewStyle, rem } from "../global-variables";
import GLOBAL from "../GLOBAL";
import NavBar from "./NavBar";
import Post from "./Post";
import { postMethodFetch } from "../functions";

function Feed({ navigation }) {

  const [data,setData] = useState([
    { ref: "953974780674271500" },
    { ref: "953974780674271500" },
    { ref: "93727279480472630000" },
    { ref: "953974780674271500" }
  ]);

  useEffect(() => {
    const submission = {
      sourceUser: GLOBAL.USERNAME,
      key: GLOBAL.KEY
    }
    postMethodFetch(submission, "/api_custom/feed", res => {
      setData(res.feed)
    });
  }, []);

  return (
    <View style={appBodyStyle}>
      <ScrollView style={scrollViewStyle}>
	<FlatList
	  data={data}
	  renderItem={({item, index}) => (<Post navigation={navigation} data={item} />)}
	/>
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
});

export default Feed;
