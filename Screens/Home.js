import { PostsScreen } from "./PostsScreen";
import { Profile } from "./ProfileScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeatherIcon from "react-native-vector-icons/Feather";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  const screenOption = {
    headerStyle: {
      borderBottomWidth: 0.5,
      borderBottomColor: "rgba(0, 0, 0, 0.30)",
    },
    headerTintColor: "#212121",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontFamily: "Roboto-Medium",
      fontSize: 17,
      lineHeight: 22,
    },
  };

  return (
    <Tabs.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 71,
          paddingTop: 9,
          paddingBottom: 22,
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        },
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          ...screenOption,
          title: "Публікації",
          headerRight: () => (
            <FeatherIcon
              name="log-out"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate("Login")}
            />
          ),
          tabBarIcon: () => {
            return <FeatherIcon name="grid" size={24} color="#212121CC" />;
          },
        })}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={() => ({
          ...screenOption,
          title: "Створити публікацію",
          headerLeft: () => (
            <FeatherIcon
              name="arrow-left"
              size={24}
              color="#212121CC"
              style={{ marginLeft: 16 }}
            />
          ),
          tabBarIcon: () => (
            <View style={styles.createBtn}>
              <FeatherIcon name="plus" size={20} color="#fff" />
            </View>
          ),
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => {
            return <FeatherIcon name="user" size={24} color="#212121CC" />;
          },
        })}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  createBtn: {
    display: "flex",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  postBtn: {
    alignSelf: "center",
    marginRight: 30,
    paddingHorizontal: 8,
  },
});
