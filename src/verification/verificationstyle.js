
import { StyleSheet } from 'react-native';
const verificationstyle = StyleSheet.create({
  verificationsafeview: {
    flex: 1,
    backgroundColor: "#037F00",
    marginTop: 20,
  },
  verificationviews: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    flex: 1,
  },
  inputview: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  input: {
    padding: 20,
    color: "black",
    backgroundColor: "white",
  },
  codetext: {
    color: "white",
    fontSize: 15,
    fontWeight: "400",
  },
  submitbtn: {
    backgroundColor: "white",
    padding: 10,
    width:200,
	  marginTop: 20,
	  borderRadius: 10,
	alignItems:'center'
  },
	codetextsubmit: {
		color: 'black',
		fontSize: 18,
		padding:8
  },
});

export default verificationstyle