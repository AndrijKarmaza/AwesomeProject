import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import avatar from "../assets/images/avatar.jpg";
import avatarNone from "../assets/images/avatar-none.png";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

export const RegistrationScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [inputLoginFocus, setInputLoginFocus] = useState(false);
  const [inputMailFocus, setInputMailFocus] = useState(false);
  const [inputPasswordFocus, setInputPasswordFocus] = useState(false);
  const [addedPhoto, setAddedPhoto] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const iconPlus = (
    <AntDesignIcon
      name="pluscircleo"
      size={25}
      color="#FF6C00"
      style={[styles.photoBtn, { backgroundColor: "#FFF" }]}
      onPress={() => setAddedPhoto(!addedPhoto)}
    />
  );
  const iconDelete = (
    <AntDesignIcon
      name="closecircleo"
      size={25}
      color="#BDBDBD"
      style={[styles.photoBtn, { backgroundColor: "#F6F6F6" }]}
      onPress={() => setAddedPhoto(!addedPhoto)}
    />
  );

  const onSubmit = () => {
    console.log(
      `RegistrationData: Login: ${login}, Email: ${email}, Password: ${password}`
    );
    formReset();
    navigation.navigate("Home");
  };

  const formReset = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/images/PhotoBG.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.screen}>
          <Image
            source={!addedPhoto ? avatarNone : avatar}
            style={[
              styles.avatar,
              {
                transform: [{ translateX: 43 }, { translateY: -60 }],
              },
            ]}
          />
          {!addedPhoto ? iconPlus : iconDelete}
          <Text style={styles.title}>Реєстрація</Text>
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                name="login"
                textContentType="username"
                placeholder="Логін"
                value={login}
                onChangeText={setLogin}
                style={{
                  ...styles.inputText,
                  borderColor: !inputLoginFocus ? "#E8E8E8" : "#FF6C00",
                  backgroundColor: !inputLoginFocus ? "#F6F6F6" : "#FFF",
                }}
                onFocus={() => {
                  setInputLoginFocus(!inputLoginFocus);
                }}
                onBlur={() => {
                  setInputLoginFocus(!inputLoginFocus);
                }}
              />
              <TextInput
                name="email"
                textContentType="emailAddress"
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
                style={{
                  ...styles.inputText,
                  borderColor: !inputMailFocus ? "#E8E8E8" : "#FF6C00",
                  backgroundColor: !inputMailFocus ? "#F6F6F6" : "#FFF",
                }}
                onFocus={() => {
                  setInputMailFocus(!inputMailFocus);
                }}
                onBlur={() => {
                  setInputMailFocus(!inputMailFocus);
                }}
              />
              <View
                style={{
                  ...styles.inputPassword,
                  borderColor: !inputPasswordFocus ? "#E8E8E8" : "#FF6C00",
                  backgroundColor: !inputPasswordFocus ? "#F6F6F6" : "#FFF",
                }}
              >
                <TextInput
                  style={styles.inputTextPassword}
                  name="password"
                  textContentType="password"
                  secureTextEntry={hidePassword ? true : false}
                  placeholder="Пароль"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => {
                    setInputPasswordFocus(!inputPasswordFocus);
                  }}
                  onBlur={() => {
                    setInputPasswordFocus(!inputPasswordFocus);
                  }}
                />
                <Text
                  style={styles.btnShow}
                  onPress={() => setHidePassword(!hidePassword)}
                >
                  {hidePassword ? "Показати" : "Сховати"}
                </Text>
              </View>
            </KeyboardAvoidingView>
          </View>
          <Text style={styles.btnSubmit} onPress={onSubmit}>
            Зареєстуватися
          </Text>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.logInText}
          >
            Вже є акаунт? Увійти
          </Text>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  screen: {
    position: "relative",
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  avatar: {
    position: "absolute",
    top: 0,
    right: "50%",
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  photoBtn: {
    position: "absolute",
    borderRadius: 25,
    top: 22,
    right: "35%",
    // backgroundColor: "#F6F6F6",
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
    letterSpacing: 0.3,
    marginBottom: 33,
  },

  inputText: {
    width: "100%",
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 16,
  },

  inputTextPassword: {
    width: "100%",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginRight: "auto",
    paddingRight: 88,
  },

  inputPassword: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 43,
    justifyContent: "center",
  },

  btnShow: {
    width: 72,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },

  btnSubmit: {
    width: "100%",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFF",
    backgroundColor: "#FF6C00",
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    marginBottom: 16,
    textAlign: "center",
  },

  logInText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    marginBottom: 45,
  },
});
