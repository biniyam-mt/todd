import { useState } from "react"
import { Router } from "./Router"
import { Nav } from "./Nav"
import { Footer } from "./Footer"

export const Root = () => {
    const [activeTab, setActiveTab] = useState("home")
    return (
        <div>
            <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
            <Router activeTab={activeTab} />
            <Footer />
        </div>
    )
}