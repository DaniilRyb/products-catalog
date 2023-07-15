import React, {FC} from 'react';
import {Header} from "./shared/ui/header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import {NotFound} from "./pages/not-found/NotFound";
import Category from "./pages/category/Category";
import "./app/index.css"
export const App: FC = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Category/>} path="/category/:id"/>
                <Route element={<NotFound/>} path="*"/>
            </Routes>
        </div>
    );
}
