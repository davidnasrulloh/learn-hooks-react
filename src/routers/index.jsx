import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UseStateLearning from "../pages/hooksdasar/Usestate";
import UseEffectLearning from "../pages/hooksdasar/UseEffect";
import UseContextLearning from "../pages/hooksdasar/usecontext/UseContext";
import UseRefLearning from "../pages/hooksdasar/UseRef";
import UseMemoLearnings from "../pages/hooksdasar/UseMemo";
import UseCallBackLearning from "../pages/hooksdasar/usecallback/UseCallback";
import UseReducerLearning from "../pages/hooksdasar/UseReducer";
import UseTransitionLearning from "../pages/hooksdasar/UseTransition";
import UseDefferedValueLearning from "../pages/hooksdasar/UseDefferedValue";

const SetupRouters = () => {
    return (
        <Routes>
            {/* Landing Page Home */}
            <Route path="/" element={<Home />} />
            <Route path="/use-state" element={<UseStateLearning />} />
            <Route path="/use-effect" element={<UseEffectLearning />} />
            <Route path="/use-context" element={<UseContextLearning />} />
            <Route path="/use-ref" element={<UseRefLearning />} />
            <Route path="/use-memo" element={<UseMemoLearnings />} />
            <Route path="/use-callback" element={<UseCallBackLearning />} />
            <Route path="/use-reducer" element={<UseReducerLearning />} />
            <Route path="/use-transition" element={<UseTransitionLearning />} />
            <Route path="/use-deffered" element={<UseDefferedValueLearning />} />
        </Routes>
    );
}

export default SetupRouters;