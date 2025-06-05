import { ClockLoader } from "react-spinners";

// src/SplashScreen.jsx
export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Bem-vinda, <span className="text-love">meu amor!</span> </h1>
        <p className="mt-2 text-lg  text-gray-600 dark:text-gray-400 italic ">
          Carregando momentos especiais...
        </p>
        <div className="flex items-center justify-center w-full p-4">
          <ClockLoader color="#ff69b4" size={60} />
        </div>
      </div>
    </div>
  );
}
