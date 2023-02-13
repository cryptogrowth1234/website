import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import { serverUrl } from "../config";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // const disableContextMenu = () => {
  //   console.log("disableContextMenu");

  //   window.frames["fraDisabled"].contentWindow.document.oncontextmenu =
  //     function () {
  //       var frame = document.getElementById("fraDisabled");
  //       var contents = frame.contents();
  //       contents.find("body").attr("coin_url", " ");
  //     };
  //   // Or use this
  //   // document.getElementById("fraDisabled").contentWindow.document.oncontextmenu = function(){
  //   //   var frame =  document.getElementById("fraDisabled");
  //   //   var contents =  frame.contents();
  //   //   contents.find('body').attr("coin_url", "");
  //   // };
  // };
  const [user, setuser] = useState(null);
  const [userError, setUserError] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState(null);
  useEffect(() => {
    if (user) {
      document.tidioIdentify = {
        distinct_id: user._id,
        email: user.email,
        name: user.username,
      };
    }
  }, [user]);

  const setUser = useCallback((data) => {
    setuser(data);

    localStorage.setItem("user", JSON.stringify(data));
  }, []);

  const logout = useCallback(() => {
    setuser(null);
    localStorage.setItem("user", null);
  }, []);

  const localUser = localStorage.getItem("user");
  useEffect(() => {
    if (localUser !== null && localUser !== undefined) {
      checkIfUserISValid(localUser).then((res) => {
        if (res !== null && res.status === 200) {
          setUser(res.data);
        } else if (res !== null && res.status === 203) {
          setUserError(res.data.msg);
        }
      });
    }
  }, [setUser, localUser]);

  const checkIfUserISValid = (localUser) => {
    const user = JSON.parse(localUser);

    if (!user) {
      return new Promise((res, rej) => {
        res(null);
      });
    }

    return axios.get(
      // `https://server-globalcrypto.herokuapp.com/auth/getUser?_id=${user._id}`
      `${serverUrl}/auth/getUser?_id=${user._id}`
    );
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        forgotPasswordEmail,
        setForgotPasswordEmail,
        userError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
