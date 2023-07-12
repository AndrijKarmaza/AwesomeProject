import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View>
      <Text> Увійти</Text>
      <TextInput
        name="email"
        textContentType="emailAddress"
        placeholder="Адреса електронної пошти"
      />
      <View>
        <TextInput
          name="password"
          textContentType="password"
          secureTextEntry={hidePassword ? true : false}
          placeholder="Пароль"
        />
        <Text onPress={() => setHidePassword(!hidePassword)}>
          {hidePassword ? "Показати" : "Сховати"}
        </Text>
      </View>
      <Text>Увійти</Text>
      <Text>Немає акаунту? Зареєструватися</Text>
    </View>
  );
};
