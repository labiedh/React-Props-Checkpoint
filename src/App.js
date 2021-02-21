import './App.css';
import Profile from "./profile/Profile";
function App() {
  const profil={Name:"ALI Labiedh",Profession:"Technicien supérieur en informatique",
  Bio:"Technicien supérieur en informatique expérimenté et fiable ayant une solide formation technique et d'excellentes références en matière de service à la clientèle. Capable d'effectuer plusieurs tâches de façon efficace, de gérer plusieurs installations simultanément et d'achever des projets rapidement et avec précision.",
ImgProf:"./img/Montof.jpg"}
  return (
    <div className="App">
   <Profile DataProfile={profil}/>
    </div>
  );
}
export default App;
