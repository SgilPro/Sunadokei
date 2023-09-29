import { AuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export enum LoginType {
  GOOGLE = "Google",
  FACEBOOK = "Facebook",
  TWITTER = "Twitter",
  EMAIL = "Email",
}

const getProvider = (providerType: LoginType): AuthProvider | null => {
  switch (providerType) {
    case LoginType.GOOGLE:
      return new GoogleAuthProvider();
    case LoginType.FACEBOOK:
    case LoginType.TWITTER:
    case LoginType.EMAIL:
    default:
      return null;
  }
};

export const signIn = (providerType: LoginType) => {
  const provider = getProvider(providerType);
  if (!provider) return;
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log({ credential, token, user });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log({ errorCode, errorMessage, email, credential });
    });
};

export const signOut = () => {
  auth.signOut();
  console.log("logout");
};
