import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/style";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = () => {
    // if (!email || !password) return;
    navigation.navigate("Home");
    setEmail("");
    setPassword("");
  };
  return (
    <View style={styles.login}>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.backIcon}
              source={require("../assets/back-arrow.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.loginHeader}>
            <Text style={styles.loginSign}>Sign In</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.emailInputContainer}>
              <Image source={require("../assets/email-icon.png")} />
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Enter email"
                style={styles.loginInput}
              />
            </View>
            <View style={styles.passwordInputContainer}>
              <View style={styles.passwordInput}>
                <Image source={require("../assets/lock-icon.png")} />
                <TextInput
                  placeholder="******"
                  secureTextEntry={!isPasswordVisible}
                  style={styles.loginInput}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <View style={styles.passwordInputEye}>
                <TouchableOpacity
                  style={styles.passwordInputEye}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Image
                    source={
                      isPasswordVisible
                        ? require("../assets/eye-slash.png")
                        : require("../assets/eye-slash.png")
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loginBottom}>
          <Text style={styles.accountText}>Don't have an accout?</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.lText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
