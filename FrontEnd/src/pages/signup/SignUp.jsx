import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

function SignUp() {
  const [inputs, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();
  const handleCheckboxChange = (gender) => {
    setInput({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(inputs);
  };

  document.title = "Chatter Vibe - Signup";

  return (
    <div className="flex flex-col items-center justify-center min-w-72 sm:min-w-96 mx-auto">
      <div className="w-full p-4 sm:p-6 founded-lg shodow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 drop-shadow">
          Sign Up <span className="text-[crimson]">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit} className="">
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-white">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="input input-bordered w-full h-10 bg-netural"
              value={inputs.fullName}
              onChange={(e) =>
                setInput({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-10 bg-netural"
              value={inputs.username}
              onChange={(e) =>
                setInput({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full h-10 bg-netural"
              value={inputs.password}
              onChange={(e) =>
                setInput({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter confirm password"
              className="input input-bordered w-full h-10 bg-netural"
              value={inputs.confirmpassword}
              onChange={(e) =>
                setInput({ ...inputs, confirmpassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 inline-block ml-2 text-white"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-4 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

// STARTER CODE FOR SIGNUP COMPONENT
// function SignUp() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 founded-lg shodow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter fullname"
//               className="input input-bordered w-full h-10 bg-netural"
//             />
//           </div>
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
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter confirm password"
//               className="input input-bordered w-full h-10 bg-netural"
//             />
//           </div>
//           <GenderCheckbox />
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
//           >
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
