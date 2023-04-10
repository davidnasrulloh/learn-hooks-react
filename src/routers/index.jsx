import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UseStateLearning from "../pages/hooksdasar/Usestate";
import UseEffectLearning from "../pages/hooksdasar/UseEffect";
import UseContextLearning from "../pages/hooksdasar/usecontext/UseContext";
import UseRefLearning from "../pages/hooksdasar/UseRef";

const SetupRouters = () => {
    return (
        <Routes>
            {/* Landing Page Home */}
            <Route path="/" element={<Home />} />
            <Route path="/use-state" element={<UseStateLearning />} />
            <Route path="/use-effect" element={<UseEffectLearning />} />
            <Route path="/use-context" element={<UseContextLearning />} />
            <Route path="/use-ref" element={<UseRefLearning />} />
        </Routes>
    );
}

export default SetupRouters;