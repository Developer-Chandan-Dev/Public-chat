// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username.trim(), password.trim());
  };
  return (
    <div className="flex flex-col items-center justify-center  min-w-72 sm:min-w-96 mx-auto ">
      <div className="w-full p-4 sm:px-6 sm:py-8 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 drop-shadow">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-10 bg-netural"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full h-10 bg-netural"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            {"Dont't"} have an account?
          </Link>
          <div className="mb-2">
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

// STARTER CODE FOR THIS FILE
// import React from "react";

// function Login() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3x1 font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500">Chat App</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="input input-bordered w-full h-10 bg-netural"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="input input-bordered w-full h-10 bg-netural"
//             />
//           </div>
//           <a
//             href="#"
//             className="text sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             {"Dont't"} have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
