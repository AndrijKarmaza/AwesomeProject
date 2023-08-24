import React from "react";
import { View, ScrollView } from "react-native";

import { PostCard } from "../src/components/PostCard";
import Profile from "../src/components/Profile";
const avatar = require("../assets/images/avatar.jpg");
import posts from "../assets/data/posts";

const PostsScreen = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <Profile
        avatar={avatar}
        name="Natali Romanova"
        email="email@example.com"
      />
      <ScrollView
        style={{ margin: 0, padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {posts.map(
          ({
            img,
            description,
            likes,
            comments,
            locationName,
            geoLocation,
          }) => {
            return (
              <PostCard
                key={description}
                image={img}
                description={description}
                likes={likes}
                comments={comments}
                locationName={locationName}
                geoLocation={geoLocation}
              />
            );
          }
        )}
      </ScrollView>
    </View>
  );
};

export default PostsScreen;
