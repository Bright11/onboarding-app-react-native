
import { StyleSheet } from 'react-native';
const creatAccountstyle = StyleSheet.create({
  creatAccountsafeview: {
    flex: 1,
  },
  creatAccountinputview: {
    position: "absolute",
    bottom: 0,
  },

  inputview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#E2E2E2",
    padding: 10,
    borderRadius: 10,
  },
  input: {
    width: "100%",
    padding: 5,
    color: "white",
  },
  sumbitview: {
    backgroundColor: "#037F00",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  submittext: {
    color: "white",
    fontSize: 20,
  },
  pagenametext: {
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  orview: {
    alignItems: "center",
    margin: 10,
  },
  ortext: {
    fontSize: 20,
  },
  socialview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  noaccountview: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  noaccounttext: {
    fontSize: 15,
    fontWeight: "300",
  },
	signuptext: {
		fontSize: 20,
		fontWeight:"500"
  },
});

export default creatAccountstyle