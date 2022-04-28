import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BotonesScreen } from "../components/botones/BotonesScreen";
import { FormsScreen } from "../components/forms/FormsScreen";
import { PopoverScreen } from "../components/popovers/PopoverScreen";
import { Inicio } from "../components/inicio/Inicio";
import { SideBar } from "../components/ui/SideBar";

export const AppRouter = () => {
  return (
    <BrowserRouter basename="/main">
        
        <SideBar />

        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route index element={<Inicio />} />
            <Route path="botones" element={<BotonesScreen />} />
            <Route path="formularios" element={<FormsScreen />} />
            <Route path="popover" element={<PopoverScreen />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<Inicio />} />
        
        </Routes>
    </BrowserRouter>
  )
}
