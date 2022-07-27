import { useState } from "react"
import { Content } from "./Router"
import { Nav } from "./Nav"

export const Root = () => {
    const [activeTab, setActiveTab] = useState("home")
    return (
        <div>
            <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
            <Content activeTab={activeTab} />
        </div>
    )
}
