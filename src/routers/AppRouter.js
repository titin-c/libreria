import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { BotonesScreen } from "../components/botones/BotonesScreen";
import { FormsScreen } from "../components/forms/FormsScreen";
import { PopoverScreen } from "../components/popovers/PopoverScreen";
import { Inicio } from "../components/inicio/Inicio";
import { SideBar } from "../components/ui/SideBar";
import { OnboardingScreen } from "../components/onboarding/OnboardingScreen";
import { CardsScreen } from "../components/cards/CardsScreen";
import { ProductTableScreen } from "../components/tables/ProductTableScreen";
import { NavbarScreen } from "../components/navbar/NavbarScreen";

export const AppRouter = () => {
  return (
    <HashRouter>
        
        <SideBar />

        <Routes>
            <Route path="libreria/" element={<Inicio />} />
            <Route index element={<Inicio />} />
            <Route path="libreria/botones" element={<BotonesScreen />} />
            <Route path="libreria/formularios" element={<FormsScreen />} />
            <Route path="libreria/popover" element={<PopoverScreen />} />
            <Route path="libreria/onboarding" element={<OnboardingScreen />} />
            <Route path="libreria/cards" element={<CardsScreen />} />
            <Route path="libreria/product-tables" element={<ProductTableScreen />} />
            <Route path="libreria/navbar" element={<NavbarScreen />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="libreria/*" element={<Inicio />} />
        
        </Routes>
    </HashRouter>
  )
}
