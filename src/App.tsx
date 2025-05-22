import "./App.css";
import Header from "./Components/Header";
import PhotoCarousel from "./Components/PhotoCarousel";
import Temp from "./Components/Temp";

export default function App() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center gap-6 py-4 p-2 max-w-96 w-full h-full">
        <Header
          image="https://www.psicologosberrini.com.br/wp-content/uploads/terapia-de-casal-amor-ou-costume.jpg"
          firstPerson="eduardo"
          secondPerson="iasmin"
          descricao="texto de descrição"
        />
        <PhotoCarousel />
        <Temp />
      </div>
    </div>
  );
}
