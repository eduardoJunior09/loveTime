import "./App.css";
import Header from "./Components/Header";
import PhotoCarousel from "./Components/PhotoCarousel";
import Temp from "./Components/Temp";

export default function App() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center gap-6 py-4 p-2 max-w-96 w-full h-full">
        <Header
          image="https://raw.githubusercontent.com/eduardoJunior09/loveTime/refs/heads/main/src/assets/01.jpg"
          firstPerson="Eduardo"
          secondPerson="Iasmin"
          descricao="Com você, todos os dias têm sabor de amor."
        />
        <PhotoCarousel />
        <Temp />
      </div>
    </div>
  );
}
