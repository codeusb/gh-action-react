import { useState } from "react";

export const GhUser = () => {
  const [user, setUser] = useState("init");
  const getGithubUser = () => {
    fetch(`https://api.github.com/users/${"codeusb"}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data?.name || "not data");
        console.log(data);
      });
  };
  return (
    <div className="gh-user">
      <button onClick={getGithubUser}>Click Me</button>
      <button onClick={() => setUser("")}>Revert</button>
      <div>
        <span>{user}</span>
      </div>
    </div>
  );
};
