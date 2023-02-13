import { Routes } from "./Routes";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";
function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     width: "100%",
    //     height: "100vh",
    //   }}
    // >
    //   <span>This website is currently under development</span>
    // </div>
  );
}

export default App;
