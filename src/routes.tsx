import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLayout } from "./layouts/PageLayout";
import { Home } from "./pages/Home";

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route path="/" element={<Home/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}