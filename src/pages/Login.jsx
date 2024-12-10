import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Simulasikan autentikasi
    if (username && password) {
      navigate("/dashboard"); // Arahkan ke Dashboard jika login berhasil
    } else {
      alert("Please fill in both fields!");
    }
  };

  return (
    <>
      <div className="flex">
        <div 
          className="w-2/5 h-screen px-10 pt-10 pb-20 hidden xl:block bg-cover bg-center relative"
          style={{ backgroundImage: `url('./technician.jpg')` }} >
          <div className="bg-[rgba(94,150,214,0.79)] w-[85%] flex flex-col rounded-2xl gap-6 py-8 px-6 absolute bottom-10 left-1/2 -translate-x-1/2 items-center">
            <h1 className="xl:text-4xl text-xl text-white w-[100%] source-sans-3-semibold">
              Maintenance Library Excellent
            </h1>
            <h3 className="xl:text-md text-sm text-white w-[100%] source-sans-3-medium">
              “Your Trusted Source for Maintenance Excellence”
            </h3>
          </div>
        </div>

        <div className="xl:w-3/5 w-full bg-[#E0ECF4] lg:px-40 px-10 py-28 flex justify-center h-screen">
          <div className="xl:w-4/5 w-full">
            <h1 className="text-3xl text-black source-sans-3-semibold">Login</h1>
            <h3 className="text-base text-black mt-3 source-sans-3-regular">
              Please Fill in Login Information
            </h3>
            <div className="flex flex-col mt-5 gap-1">
              <h1 className="text-base source-sans-3-semibold text-black">
                NIK or Username
              </h1>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered w-full bg-transparent border-2 border-[#73A0C8] py-2 px-4 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-5 gap-1 relative">
              <h1 className="text-base source-sans-3-semibold text-black">
                Password
              </h1>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full bg-transparent border-2 border-[#73A0C8] py-2 px-4 rounded-md"
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400 cursor-pointer"
                    onClick={toggleShowPassword}
                  />
                ) : (
                  <FaEye
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400 cursor-pointer"
                    onClick={toggleShowPassword}
                  />
                )}
              </div>
            </div>
            <div className="pt-8">
              <button
                onClick={handleLogin}
                className="btn text-lg text-white w-full xl:w-160 py-2 rounded-md source-sans-3-semibold bg-[#73A0C8] transition-transform duration-200 active:scale-95 hover:opacity-90"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
