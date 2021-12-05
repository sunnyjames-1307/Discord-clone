import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
