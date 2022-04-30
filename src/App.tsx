import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Homepage = lazy(() => import("./pages/Homepage"));
const Repository = lazy(() => import("./pages/Repository"));
const Results = lazy(() => import("./pages/Results"));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/">
                    <Route index element={<Homepage />} />
                    <Route path="results" element={<Results />} />
                    <Route path="repository">
                        <Route path=":username/:repository" element={<Repository />} />
                    </Route>
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
