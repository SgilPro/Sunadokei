import Record from "@/models/Record";
import { db } from "../service/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
// const converter = {
//   toFirestore: (data: Record) => data,
//   fromFirestore: (snap: QueryDocumentSnapshot) =>
//     snap.data() as Record,
// };

export const createRecord = async () => {
  await setDoc(
    doc(db, "records", "做ImIn"),
    new Record("做ImIn Wireframe", "", [], 5760, new Date())
  );
};

type TestData = { title: string; description: string };

export const getTestData = async (key: string): Promise<TestData> => {
  const docSnap = await getDoc(doc(db, "tests", key));
  if (docSnap.exists()) {
    return docSnap.data() as TestData;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return { title: "", description: "" };
  }
};

export const createTestData = async () => {
  await setDoc(doc(db, "tests", "Just a test"), {
    title: "Test Title",
    description: "Test Description",
  });
  console.log("你又按到了啦");
};
