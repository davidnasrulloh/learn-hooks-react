import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UseStateLearning from "../pages/hooksdasar/Usestate";

const SetupRouters = () => {
    return (
        <Routes>
            {/* Landing Page Home */}
            <Route path="/" element={<Home />} />
            <Route path="/use-state" element={<UseStateLearning />} />

        </Routes>
    );
}

export default SetupRouters;