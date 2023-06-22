import GroupTripsArticle from "./components/GroupTripsArticle/GroupTripsArticle";
import Header from "./components/Header/Header";
import ProximosViajesSection from "./components/ProximosViajesSection/ProximosViajesSection";
import SobreMiArticle from "./components/SobreMiArticle/SobreMiArticle";
import OfrecemosSection from "./components/OfrecemosSection/OfrecemosSection";
import ResponsiveTravelSection from "./components/ResponsiveTravelSection/ResponsiveTravelSection";

export default function App() {
  return (
    <div className="App">
      <Header />
      <GroupTripsArticle />
      <SobreMiArticle />
      <ProximosViajesSection />
      <OfrecemosSection />
      <ResponsiveTravelSection />
    </div>
  );
}
