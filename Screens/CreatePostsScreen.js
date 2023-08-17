import { Text, StyleSheet, View } from "react-native";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Post Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    textAlign: "center",
  },
});
