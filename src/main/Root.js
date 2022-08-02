import { Nav } from "./components/Nav"
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom'
import { TeachingPage } from "./pages/TeachingPage"
import { LabPage } from "./pages/LabPage"
import { ResearchPage } from "./pages/ResearchPage"
import { HomePage } from "./pages/HomePage"

export const Root = () => {
    return (
        <div>
            <BRouter>
                <Nav />
                <Routes>
                    <Route exact path="/toddaustin/" element={<HomePage />} />
                    <Route exact path="/toddaustin/research" element={<ResearchPage />} />
                    <Route exact path="/toddaustin/austin-lab" element={<LabPage />} />
                    <Route exact path="/toddaustin/teaching" element={<TeachingPage />} />
                </Routes>
            </BRouter>
            {/* <Footer /> */}
        </div>
    )
}