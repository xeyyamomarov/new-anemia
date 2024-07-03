import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../theme/style"
import { useNavigation } from "@react-navigation/native"
import { useAppContext } from "../context/AppContext"

const ModalScreen=()=>{

    const navigation = useNavigation()
    const {photoData} = useAppContext()


    return(
        <SafeAreaView style={{flex:1,backgroundColor:"white"}} >
             <View style={styles.fullScreenImageWrapper}>
          <View style={styles.messageContainer}>
            <TouchableOpacity
              style={styles.closeMessage}
              onPress={() => navigation.goBack()}
            >
              <Image source={require("../assets/closeIcon.png")} />
            </TouchableOpacity>
            <Text style={styles.message}>
                You have anemia
              {/* {photoData?.message} */}
            </Text>
          </View>
        </View>
        </SafeAreaView>
    )
}


export default ModalScreen