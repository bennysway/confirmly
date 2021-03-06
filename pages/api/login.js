import withSession from "../../providers/session";
import fire from "../../config/fire-config";

export default withSession(async (req, res) => {
  const { email } = await req.body;
  const { password } = await req.body;

  try {
    const credentials = await fire
      .auth()
      .signInWithEmailAndPassword(email, password);

    const user = {
      isLoggedIn: true,
      id: credentials.user.uid,
      email: credentials.user.email,
      token: credentials.user.getIdToken,
    };

    req.session.set("user", user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    res.status(500).json(error);
  }
});