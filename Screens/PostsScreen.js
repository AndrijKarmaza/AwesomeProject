import { Text, View, Image, StyleSheet } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={require("../assets/images/avatar-small.jpg")}
          style={styles.userAvatar}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userMail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },

  userInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 32,
  },

  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },

  userName: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },

  userMail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
});
