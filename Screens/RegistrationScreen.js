import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";

export const RegistrationScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.screen}>
      <View
        style={[
          styles.avatar,
          {
            transform: [{ translateX: 43 }, { translateY: -60 }],
          },
        ]}
      />
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput
        name="login"
        textContentType="username"
        placeholder="Логін"
        style={styles.inputText}
      />
      <TextInput
        name="email"
        textContentType="emailAddress"
        placeholder="Адреса електронної пошти"
        style={styles.inputText}
      />
      <View style={styles.inputPassword}>
        <TextInput
          style={styles.inputTextPassword}
          name="password"
          textContentType="password"
          secureTextEntry={hidePassword ? true : false}
          placeholder="Пароль"
        />
        <Text
          style={styles.btnShow}
          onPress={() => setHidePassword(!hidePassword)}
        >
          {hidePassword ? "Показати" : "Сховати"}
        </Text>
      </View>
      <Text style={styles.btnSubmit}>Зареєстуватися</Text>
      <Text style={styles.logInText}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    top: 0,
    right: "50%",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
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
    paddingBottom: 78,
    alignItems: "center",
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
    backgroundColor: "#F6F6F6",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
  },

  inputTextPassword: {
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
    backgroundColor: "#F6F6F6",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
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
  },
});
