import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../theme/style";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const ProfileScreen = () => {
  const [openModal, setOpenModal] = useState(false);

  const navigation = useNavigation();

  const handleOpenModal = () => {
    setOpenModal(true);
    navigation.navigate("Modal"); 
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D5ECF2" }}>
      <View style={styles.topProfileContainer}>
        <View style={styles.topProfileContent}>
          <View style={styles.testIcon}>
            <Image source={require("../assets/Document.png")} />
          </View>
          <Text style={styles.testContent}>Test nəticələri</Text>
        </View>
      </View>
      <View style={styles.bottomProfileContainer}>
        <View style={styles.searchInputContainer}>
          <Image source={require("../assets/Search.png")} />
          <TextInput placeholder="Axtarış" style={styles.searchInput} />
        </View>
        <View style={styles.anemiaTestCard}>
          <View>
            <Image source={require("../assets/profile-anemia.png")} />
          </View>
          <View style={styles.anemiaTest}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
              Anemia testinin nəticəsi
            </Text>
            <View style={styles.testBtnContainer}>
              <TouchableOpacity
                style={styles.testBtn}
                onPress={handleOpenModal}
              >
                <Text style={styles.testBtnContent}>Nəticəni əldə et</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    
    </SafeAreaView>
  );
};

export default ProfileScreen;
