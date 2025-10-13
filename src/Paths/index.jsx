import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import HomePage from "../pages/HomePage";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;