import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;