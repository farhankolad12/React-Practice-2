import db from "../firebase";

export const addUser = (fname, lname, state, city, pin, id) => {
  db.collection("users").doc(id).set({
    firstName: fname,
    lastName: lname,
    userState: state,
    userCity: city,
    userPin: pin,
  });
};

export const getUser = async (id) => {
  const userDocs = await db.collection("users").doc(id).get();
  if (userDocs.exists) {
    return userDocs.data();
  } else {
    return false;
  }
};
