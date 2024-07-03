import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //  welcome page started
  welcome: {
    flex: 1,
    backgroundColor: "#0165F8",
  },
  container: {
    padding: 16,
    position: "relative",
    display: "flex",
  },
  welcomeContainer: {
    flex: 1,
    padding: 16,
  },
  welcomeContext: {
    height: "100%",
    justifyContent: "space-between",
  },

  anemiaHeaderContainer: {
    height: "50%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  anemiaText: {
    fontSize: 36,
  },
  signContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpBtn: {
    backgroundColor: "#EFEFEF",
    padding: 16,
    borderRadius: 20,
    color: "black",
    width: 160,
    marginRight: 10,
    fontSize: 14,
    textAlign: "center",
    // fontWeight: "bold",
  },
  signText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },

  loginSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#221F1F",
  },

  bottomTextContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  accountText: {
    fontSize: 16,
    letterSpacing: 1.2,
  },
  lText: {
    color: "#407CE2",
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "bold",
  },

  // welcome page finished

  // login page started

  login: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
    // backgroundColor: '#0065FC',
  },
  back: {
    flexDirection: "row",
    justifyContent: "start",
  },

  loginContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  form: {
    marginTop: 40,
    width: "100%",
  },

  emailInputContainer: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "rgba(34,31,31,0.1)",
    display: "flex",
    flexDirection: "row",
    padding: 16,
    borderRadius: 8,
  },
  passwordInputContainer: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "rgba(34,31,31,0.1)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  passwordInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  forgotPassword: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "#407CE2",
    fontSize: 13,
  },

  loginInput: {
    marginLeft: 10,
    fontSize: 14,
    color: "#221F1F",
  },
  input: {
    borderRadius: 10,
    color: "#EDEBEA",
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#009CF4",
  },
  loginBtn: {
    textAlign: "center",
    marginTop: 28,
    paddingVertical: 20,
    borderRadius: 32,
    backgroundColor: "#407CE2",
  },
  loginText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  loginBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  // home page start

  homeMenu: {
    height: "100%",
    backgroundColor: "#D5ECF2",
    flex: 1,
    position: "relative",
  },
  homeHeader: {
    backgroundColor: "#EAEAEA",
    padding: 10,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    flexDirection: "column",
  },
  homeHeaderContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  homeHeaderContent: {
    fontSize: 30,
    fontWeight: "bold",
  },

  checkupContainer: {
    // alignItems: "center",
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  checkbtn: {
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 40,
    marginRight: 10,
    width: 160,
  },
  checkupBtn: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    paddingVertical: 16,
  },

  homeBottom: {
    marginTop: 20,
  },

  homeText: {
    fontSize: 32,
  },

  // home page started

  topSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  topLeftSection: {
    display: "flex",
  },
  topHello: {
    fontSize: 16,
    fontWeight: "bold",
  },
  topName: {
    fontSize: 16,
    color: "#221F1F",
  },
  topContent: {
    fontSize: 16,
    color: "rgba(34,31,31,0.5)",
    marginTop: 20,
  },
  // topRightSection:{

  // },

  bottomSection: {
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    width: "100%",

  },


  

  searchInputContainer: {
    borderWidth: 1,
    borderColor: "#E8F3F1",
    backgroundColor: "#FBFBFB",
    borderRadius: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },

  searchInput: {
    color: "rgba(34,31,31,0.4)",
    marginLeft: 20,
    fontSize: 14,
  },



 

  doctorContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    marginHorizontal: 15,
    padding: 10,
    marginTop:20
  },

  doctorImg:{
    backgroundColor:"#407CE2",
    borderRadius:50,
    padding:12
  },
  doctorContent:{
    marginTop:10,
    fontSize:14

  },

  contentContainer:{
    alignItems:"center",
    justifyContent:"center"
  },
  anemiaHeader:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  anemiaLeft:{
    fontSize:16,
    fontWeight:"bold",
    color:"#221F1F"
  },

  anemiaRight:{
    color:"#407CE2",
    fontSize:14
  },

  anemiaList:{
    marginTop:20,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  anemiaCard:{
    borderWidth:1,
    borderColor:"rgba(34,31,31,0.1)",
    padding:8,
    borderRadius:6
  },

  anemiaHead:{
    fontSize:16,
    fontWeight:"bold",
    color:"black"
  },

  textContent:{
    color:"#5A5A5A",
    fontSize:8
  },

  anemiaBtnContainer:{
    display:"flex",
    justifyContent:"flex-end",
    flexDirection:"row"
  },

  anemiaBtn:{
    backgroundColor:"#407CE2",
    marginTop:5,
    borderRadius:6,
    padding:4,
    width:100,
    alignItems:"center"
  },

  anemiaBtnContent:{
    color:"white",
    fontSize:12,
    fontWeight:"bold"
  },


  cameraContainer:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"black",
  },


  cameraIconContainer:{
    backgroundColor:"white",
    padding:10,
    borderRadius:50,
  },


  cameraIcon:{
    backgroundColor:"#A5A5A5",
    padding:20,
    borderRadius:50,
    width:76,
    height:76,


  },


  homeContainer: {
    // flex:1,
    backgroundColor: "#EDEDED",
    paddingHorizontal: 8,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: "40%",
  },
  homeContent: {
    marginTop: 20,
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  homeBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 30,
  },
  homeBtn: {
    paddingVertical: 16,
    backgroundColor: "#0065FC",
    borderRadius: 16,
    width: "45%",
    alignItems: "center",
  },
  homeBtnContent: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
  healthStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  healthIcon: {
    backgroundColor: "#E4EDF9",
    padding: 12,
    borderRadius: 16,
  },

  // card container
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardBox: {
    backgroundColor: "#EFEFEF",
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  cardImg: {
    width: 150,
    height: 120,
  },
  openBtn: {
    padding: 8,
    backgroundColor: "#0065FC",
  },
  openBtnText: {
    fontSize: 20,
    color: "white",
  },
 
  about: {
    backgroundColor: "grey",
    height: "100%",
    marginTop: 40,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },

  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  fullScreenImageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height:"100%"
  },
  fullScreenImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  messageContainer: {
    position: "relative",
    color: "black",
    backgroundColor: "#EBF2F6",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 5,
    borderRadius: 10,
  },
  message: {
    fontSize: 20,
  },
  closeMessage: {
    position: "absolute",
    right: 10,
    top: 10,
  },
// Profile page

  topProfileContainer:{
    marginTop:25,
    padding:16,
   
  },
  topProfileContent:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  },
  testIcon:{
     backgroundColor:"rgba(64,123,255,0.3)",
     width:50,
     padding:12,
     borderRadius:50
  },
  testContent:{
    marginLeft:16,
    color:"#221F1F",
    fontSize:16,
    fontWeight:"bold"
  },

  bottomProfileContainer:{
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    height:"100%",
    width: "100%",
  },

  anemiaTestCard:{
    borderWidth:1,
    borderColor:"rgba(34,31,31,0.1)",
    paddingVertical:16,
    paddingHorizontal:8,
    borderRadius:31,
    marginTop:20,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  anemiaTest:{
    display:"flex",
    justifyContent:"space-between"
  },
  testBtnContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
  },
  testBtn:{
    paddingVertical:12,
    paddingHorizontal:6,
    backgroundColor:"#407CE2",
    borderRadius:25,
    width:130,
    alignItems:"center"
  },
  testBtnContent:{
    color:"white",
    fontSize:12,
    fontWeight:"bold"
  },

});






