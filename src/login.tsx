import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  useEffect(() => {
    document.body.classList.add("login-body");
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigate();
  const handleSignIn = () => {
    navigation("/home");
  };
  return (
    <div className="login.body flex justify-center shadow-2xl rounded-2xl border border-gray-200">
      <div className="space-y-3 p-8 w-full justify-center">
        <div className="space-y-2">
          <div className="space-y-2">
            <div>
              <svg
                width="270"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.00001 2C4.00001 2.53043 3.78899 3.03914 3.41338 3.41421C3.03778 3.78929 2.52835 4 1.99716 4C1.46598 4 0.956552 3.78929 0.580947 3.41421C0.205341 3.03914 -0.00567627 2.53043 -0.00567627 2C-0.00567627 1.46957 0.205341 0.960859 0.580947 0.585786C0.956552 0.210714 1.46598 0 1.99716 0C2.52835 0 3.03778 0.210714 3.41338 0.585786C3.78899 0.960859 4.00001 1.46957 4.00001 2Z"
                  fill="#101014"
                />
              </svg>
              <svg
                width="138"
                height="32"
                viewBox="0 0 138 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.017 22.4C10.9547 22.4 9.93581 21.9786 9.1846 21.2284C8.43339 20.4783 8.01136 19.4609 8.01136 18.4V0H0V18.4C0 25.0272 5.38043 30.4 12.017 30.4H20.8295V22.4H12.017ZM36.0511 8C35.1043 8 34.1667 8.18623 33.2919 8.54807C32.4171 8.9099 31.6223 9.44025 30.9527 10.1088C30.2832 10.7774 29.7521 11.5711 29.3898 12.4447C29.0274 13.3182 28.8409 14.2545 28.8409 15.2C28.8409 16.1455 29.0274 17.0818 29.3898 17.9553C29.7521 18.8289 30.2832 19.6226 30.9527 20.2912C31.6223 20.9598 32.4171 21.4901 33.2919 21.8519C34.1667 22.2138 35.1043 22.4 36.0511 22.4C37.9634 22.4 39.7974 21.6414 41.1495 20.2912C42.5017 18.9409 43.2614 17.1096 43.2614 15.2C43.2614 13.2904 42.5017 11.4591 41.1495 10.1088C39.7974 8.75857 37.9634 8 36.0511 8ZM20.8295 15.2C20.8295 6.8056 27.6448 0 36.0511 0C44.4575 0 51.2727 6.8056 51.2727 15.2C51.2727 23.5944 44.4575 30.4 36.0511 30.4C27.6448 30.4 20.8295 23.5944 20.8295 15.2ZM122.574 8C120.662 8 118.828 8.75857 117.475 10.1088C116.123 11.4591 115.364 13.2904 115.364 15.2C115.364 17.1096 116.123 18.9409 117.475 20.2912C118.828 21.6414 120.662 22.4 122.574 22.4C124.486 22.4 126.32 21.6414 127.672 20.2912C129.024 18.9409 129.784 17.1096 129.784 15.2C129.784 13.2904 129.024 11.4591 127.672 10.1088C126.32 8.75857 124.486 8 122.574 8ZM107.352 15.2C107.352 6.8056 114.168 0 122.574 0C130.98 0 137.795 6.8056 137.795 15.2C137.795 23.5944 130.98 30.4 122.574 30.4C114.168 30.4 107.352 23.5944 107.352 15.2ZM68.0966 0C59.6903 0 52.875 6.8056 52.875 15.2C52.875 23.5944 59.6903 30.4 68.0966 30.4H90.5284C92.1059 30.4 93.6272 30.16 95.058 29.7152L99.3409 32L103.962 23.3568C105.136 21.1565 105.75 18.7018 105.75 16.2088V15.2C105.75 6.8056 98.9347 0 90.5284 0H68.0966ZM97.7386 15.2C97.7386 13.2904 96.979 11.4591 95.6268 10.1088C94.2746 8.75857 92.4407 8 90.5284 8H68.0966C67.1497 8 66.2121 8.18623 65.3374 8.54807C64.4626 8.9099 63.6677 9.44025 62.9982 10.1088C62.3287 10.7774 61.7976 11.5711 61.4352 12.4447C61.0729 13.3182 60.8864 14.2545 60.8864 15.2C60.8864 16.1455 61.0729 17.0818 61.4352 17.9553C61.7976 18.8289 62.3287 19.6226 62.9982 20.2912C63.6677 20.9598 64.4626 21.4901 65.3374 21.8519C66.2121 22.2138 67.1497 22.4 68.0966 22.4H90.5284C92.431 22.4001 94.2565 21.6492 95.6071 20.311C96.9577 18.9728 97.7238 17.1558 97.7386 15.256V15.2Z"
                  fill="#101014"
                />
              </svg>
            </div>
            <p className="text-[14px] text-[#5B5D63] w-fit">
              Enter your username and password correctly
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col items-start space-y-3 ">
            <label className="font-semibold text-[14px]">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full border  border-gray-300  rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="flex flex-col items-start space-y-3 relative">
            <label className="font-semibold text-[14px]">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full border  border-gray-300  rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div
              className="absolute top-[50%] right-[10px] transform -translate-y-[50%] bottom-[50%]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1.6 1.6"
                  enable-background="new 0 0 64 64"
                >
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-width="0.05"
                    stroke-miterlimit="10"
                    d="M0.025 0.8s0.275 0.375 0.775 0.375 0.775 -0.375 0.775 -0.375 -0.275 -0.375 -0.775 -0.375S0.025 0.8 0.025 0.8z"
                  />
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-width="0.05"
                    stroke-miterlimit="10"
                    cx="32"
                    cy="32"
                    r="7"
                    d="M0.975 0.8A0.175 0.175 0 0 1 0.8 0.975A0.175 0.175 0 0 1 0.625 0.8A0.175 0.175 0 0 1 0.975 0.8z"
                  />
                </svg>
              ) : (
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1.6 1.6"
                  enable-background="new 0 0 64 64"
                >
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-width="0.05"
                    stroke-miterlimit="10"
                    d="M0.025 0.8s0.275 0.375 0.775 0.375 0.775 -0.375 0.775 -0.375 -0.275 -0.375 -0.775 -0.375S0.025 0.8 0.025 0.8z"
                  />
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-width="0.05"
                    stroke-miterlimit="10"
                    cx="32"
                    cy="32"
                    r="7"
                    d="M0.975 0.8A0.175 0.175 0 0 1 0.8 0.975A0.175 0.175 0 0 1 0.625 0.8A0.175 0.175 0 0 1 0.975 0.8z"
                  />
                  <path
                    fill="none"
                    stroke="#000000"
                    stroke-width="0.05"
                    stroke-miterlimit="10"
                    x1="9"
                    y1="55"
                    x2="55"
                    y2="9"
                    d="M0.225 1.375L1.375 0.225"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={handleSignIn}
          className="w-[350px] h-[40px] rounded-full flex items-center justify-center bg-[#FF7900]"
        >
          <div className="bg-[#FF7900] w-[350px] ">
            <span className="text-white text-sm font-semibold">Sign In</span>
          </div>
        </button>
      </div>
    </div>
  );
}
