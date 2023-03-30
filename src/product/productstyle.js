
import { StyleSheet } from 'react-native';
const productstyle = StyleSheet.create({
  findviews: {
    flexDirection: "column",
    paddingLeft: 10,
  },
  usertext: {
    fontSize: 18,
    letterSpacing: 2,
    marginBottom: 10,
  },
  foodtext: {
    color: "#037F00",
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 30,
  },
  searchinputview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
	  marginLeft: 10,
	marginRight:10,
  },
  searchinputview_holder: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3E3E3",
    width: "85%",
    marginTop: 20,
  },
  searchinput: {
    width: "100%",
  },
  searchbtn: {
    backgroundColor: "#EAEAEA",
  },
  searchrighticon: {
    backgroundColor: "#037F00",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 6,
  },
	categoryview: {
	  marginTop:20
  },
});

export default productstyle