import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UseReducerLearning from "../pages/reacthooks/LesserUsedHooks/UseReducer";
import UseTransitionLearning from "../pages/reacthooks/LesserUsedHooks/UseTransition";
import UseDefferedValueLearning from "../pages/reacthooks/LesserUsedHooks/UseDefferedValue";

import UseStateLearning from "../pages/reacthooks/MustKnowHooks/UseState";
import UseEffectLearning from "../pages/reacthooks/MustKnowHooks/UseEffect";
import UseContextLearning from "../pages/reacthooks/MustKnowHooks/usecontext/UseContext";
import UseRefLearning from "../pages/reacthooks/LesserUsedHooks/UseRef";
import UseMemoLearnings from "../pages/reacthooks/LesserUsedHooks/UseMemo";
import UseCallBackLearning from "../pages/reacthooks/LesserUsedHooks/usecallback/UseCallback";

import UseLayoutEffect from "../pages/reacthooks/OptionalHooks/UseLayoutEffect";
import UseDebugValue from "../pages/reacthooks/OptionalHooks/usedebugvalue/UseDebugValue";
import UseImperativeHandle from "../pages/reacthooks/OptionalHooks/useimperativehandle/UseImperativeHandle";
import UseId from "../pages/reacthooks/OptionalHooks/UseId";
import HTCCustomHooks from "../pages/reacthooks/CustomHooks/HTCCustomHooks";
import Hooks1_5 from "../pages/reacthooks/CustomHooks/hooks1-5";
import Hooks6_10 from "../pages/reacthooks/CustomHooks/hooks6-10";
import Hooks11_15 from "../pages/reacthooks/CustomHooks/hooks11-15";
import Hooks16_20 from "../pages/reacthooks/CustomHooks/hooks16-20";
import Hooks21_25 from "../pages/reacthooks/CustomHooks/hooks21-25";




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
            <Route path="/use-custom11-15" element={<Hooks11_15 />} />
            <Route path="/use-custom16-20" element={<Hooks16_20 />} />
            <Route path="/use-custom21-25" element={<Hooks21_25 />} />
        </Routes>
    );
}

export default SetupRouters;