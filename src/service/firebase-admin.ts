import admin from "firebase-admin";
// import firebaseConfig from "@/firebaseConfig";

const serviceAccountKey = require("@/serviceAccountKey.json");

export const verifyIdToken = (token: string) => {
  if (!admin.app.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountKey),
    });
  }
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
  });
  console.log("Initialized.");
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  // if (!/already exists/u.test(error.message)) {
  //   console.error("Firebase admin initialization error", error.stack);
  // }
}

export default admin;
