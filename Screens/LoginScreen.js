import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [inputMailFocus, setInputMailFocus] = useState(false);
  const [inputPasswordFocus, setInputPasswordFocus] = useState(false);

  return (
    <View
      style={{
        ...styles.screen,
        marginBottom: inputPasswordFocus || inputMailFocus ? -216 : 0,
      }}
    >
      <Text style={styles.title}> Увійти</Text>
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            name="email"
            textContentType="emailAddress"
            placeholder="Адреса електронної пошти"
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
              name="password"
              textContentType="password"
              secureTextEntry={hidePassword ? true : false}
              placeholder="Пароль"
              style={styles.inputTextPassword}
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
      <Text style={styles.btnSubmit}>Увійти</Text>
      <Text style={styles.logInText}>Немає акаунту? Зареєструватися</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
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
    marginBottom: 111,
  },
});
