import { HomePage } from "./pages/HomePage";
import { LabPage } from "./pages/LabPage";
import { NewsPage } from "./pages/NewsPage";
import { ResearchPage } from "./pages/ResearchPage";
import { TeachingPage } from "./pages/TeachingPage";

export const Content = ({ activeTab }) => {
    const renderSwitch = (activeTab) => {
        switch (activeTab) {
            case "home":
                return <HomePage />;
            case "research":
                return <ResearchPage />;
            case "lab":
                return <LabPage />;
            case "news":
                return <NewsPage />;
            case "teaching":
                return <TeachingPage />;
            default:
                return;

        }
    }
    return (
        <div>
            {renderSwitch(activeTab)}
        </div>
    )
}