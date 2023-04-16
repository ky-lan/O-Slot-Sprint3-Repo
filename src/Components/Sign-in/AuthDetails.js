import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebaseUtils";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const signOutHandler = () => {
    signOut(auth)
      .then(res => {
        console.log(res);
        console.log("sign out was successfull");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Siged In as ${authUser.email}`}</p>
          <button onClick={signOutHandler}>Sign Out</button>
        </>
      ) : (
        <p>Current Status: Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
//auth/email-already-exists, auth/invalid-display-name (must be non-empty string), auth/invalid-email (must be string), auth/invalid-password (must be string with at least 6 characters), auth/user-not-found
