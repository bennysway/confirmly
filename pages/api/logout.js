import withSession from "../../providers/session";
import initFirebase from "../../providers/initFirebase";
import firebase from "firebase/app";
import "firebase/auth";

export default withSession(async (req, res) => {
  initFirebase();
  await firebase.auth().signOut();
  req.session.destroy();
  res.json({ isLoggedIn: false });
});