import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../theme/style";
import { useNavigation } from "@react-navigation/native";

export const HomeView = () => {
  const navigation = useNavigation();

  const doctorIcon1 = require("../../assets/Doctor-icon1.png");
  const doctorIcon2 = require("../../assets/doctor-icon2.png");
  const doctorIcon3 = require("../../assets/doctor-icon3.png");

  const doctorData = [
    { id: 1, name: "Top həkimlər", img: doctorIcon1 },
    { id: 2, name: "Apteklər", img: doctorIcon2 },
    { id: 3, name: "Yardım", img: doctorIcon3 },
  ];

  const anemiaData = [
    {
      id: 1,
      name: "Anemia",
      description: "Qırmızı qan hüceyrələrinin çatışmazlığı",
      img: require("../../assets/anemia.png"),
    },
    {
      id: 2,
      name: "Su çiçəyi",
      description: "Yoluxucu dəri səpgisi xəstəliyi",
      img: require("../../assets/anemia-2.png"),
    },
  ];

  const anemiaData2 = [
    {
      id: 3,
      name: "Sebaria",
      description: " Dərinin yağ ifrazının artması ",
      img: require("../../assets/serabia.png"),
    },
    {
      id: 2,
      name: "Qızılca",
      description: "Yüksək qızdırma və səpgi ",
      img: require("../../assets/r-4.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.homeMenu}>
      <View style={styles.topSection}>
        <View style={styles.topLeftSection}>
          <Text style={styles.topHello}>Salam!</Text>
          <Text style={styles.topName}>Melisa</Text>
          <Text style={styles.topContent}>Özünüzü necə hiss edirsiniz?</Text>
        </View>
        <View
        //  style={styles.topRightSection}
        >
          <Image source={require("../../assets/doctor.png")} />
        </View>
      </View>
      <ScrollView style={styles.bottomSection}>
        <View>
          <View style={styles.searchInputContainer}>
            <Image source={require("../../assets/Search.png")} />
            <TextInput placeholder="Axtarış" style={styles.searchInput} />
          </View>

          <View style={styles.doctorHeader}>
            <FlatList
              data={doctorData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.doctorContainer}>
                  <View style={styles.doctorImg}>
                    <Image source={item.img} />
                  </View>
                  <Text style={styles.doctorContent}>{item.name}</Text>
                </View>
              )}
              style={styles.flatList}
              horizontal={true}
              contentContainerStyle={styles.contentContainer}
            />
          </View>
          <View style={styles.anemiaHeader}>
            <Text style={styles.anemiaLeft}>Cild xəstəliklərinin aşkarı</Text>
            <Text style={styles.anemiaRight}>Hamısını görüntülə</Text>
          </View>
          <View style={styles.anemiaList}>
            {anemiaData.map((item) => (
              <View key={item.id} style={styles.anemiaCard}>
                <Image source={item.img} style={styles.anemiaImg} />
                <View style={styles.anemiaContent}>
                  <Text style={styles.anemiaHead}>{item.name}</Text>
                  <Text style={styles.textContent}>{item.description}</Text>
                </View>
                <View style={styles.anemiaBtnContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Camera")}
                    style={styles.anemiaBtn}
                  >
                    <Text style={styles.anemiaBtnContent}>Aşkar et</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.anemiaList}>
            {anemiaData2.map((item) => (
              <View key={item.id} style={styles.anemiaCard}>
                <Image source={item.img} style={styles.anemiaImg} />
                <View style={styles.anemiaContent}>
                  <Text style={styles.anemiaHead}>{item.name}</Text>
                  <Text style={styles.textContent}>{item.description}</Text>
                </View>
                <View style={styles.anemiaBtnContainer}>
                  <TouchableOpacity style={styles.anemiaBtn}>
                    <Text style={styles.anemiaBtnContent}>Aşkar et</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
