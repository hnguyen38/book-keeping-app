import SignUp from "../components/signin/signup";
import SignIn from "../components/signin/signin";
import styles from "./SignPage.module.scss";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../utils/firebase/firebase.utils";

function SignPage() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div className={styles.sign}>
      <SignIn googleBtn={logGoogleUser} />
      <SignUp googleBtn={logGoogleUser} />
    </div>
  );
}

export default SignPage;
