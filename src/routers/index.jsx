import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UseReducerLearning from "../pages/hooksdasar/LesserUsedHooks/UseReducer";
import UseTransitionLearning from "../pages/hooksdasar/LesserUsedHooks/UseTransition";
import UseDefferedValueLearning from "../pages/hooksdasar/LesserUsedHooks/UseDefferedValue";

import UseStateLearning from "../pages/hooksdasar/MustKnowHooks/UseState";
import UseEffectLearning from "../pages/hooksdasar/MustKnowHooks/UseEffect";
import UseContextLearning from "../pages/hooksdasar/MustKnowHooks/usecontext/UseContext";
import UseRefLearning from "../pages/hooksdasar/LesserUsedHooks/UseRef";
import UseMemoLearnings from "../pages/hooksdasar/LesserUsedHooks/UseMemo";
import UseCallBackLearning from "../pages/hooksdasar/LesserUsedHooks/usecallback/UseCallback";

import UseLayoutEffect from "../pages/hooksdasar/OptionalHooks/UseLayoutEffect";
import UseDebugValue from "../pages/hooksdasar/OptionalHooks/usedebugvalue/UseDebugValue";
import UseImperativeHandle from "../pages/hooksdasar/OptionalHooks/useimperativehandle/UseImperativeHandle";
import UseId from "../pages/hooksdasar/OptionalHooks/UseId";
import HTCCustomHooks from "../pages/hooksdasar/CustomHooks/HTCCustomHooks";
import Hooks1_5 from "../pages/hooksdasar/CustomHooks/hooks1-5";
import Hooks6_10 from "../pages/hooksdasar/CustomHooks/hooks6-10";




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

            <Route path="/use-layouteffect" element={<UseLayoutEffect />} />
            <Route path="/use-debugvalue" element={<UseDebugValue />} />
            <Route path="/use-imperativehandle" element={<UseImperativeHandle />} />
            <Route path="/use-id" element={<UseId />} />

            <Route path="/use-HTCCustomHooks" element={<HTCCustomHooks />} />
            <Route path="/use-custom1-5" element={<Hooks1_5 />} />
            <Route path="/use-custom6-10" element={<Hooks6_10 />} />
        </Routes>
    );
}

export default SetupRouters;