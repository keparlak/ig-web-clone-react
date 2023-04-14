import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmLlT7gjlMKLjGOUk44jCCi3f8DjmGl8M",
  authDomain: "kep-ig-web.firebaseapp.com",
  projectId: "kep-ig-web",
  storageBucket: "kep-ig-web.appspot.com",
  messagingSenderId: "957113675956",
  appId: "1:957113675956:web:ba8426a86a04ba52f467e1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  userHandle(user || false);
});

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code);
  }
};
