"use client";
import { useState } from "react";

export default function Login() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const handleAvatar = (e: any) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="login">
      <div className="signinSide">
        <h2>Welcome Back!</h2>
        <form>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="loginSide">
        <h2>Create An Account!</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "avatar.png"} alt="" />
            Upload an Image
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
