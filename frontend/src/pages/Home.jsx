import { useState } from "react"

import Navbar from "../components/Navbar"
import HeroSlider from "../components/HeroSlider"
import AnalyticsDashboard from "../components/AnalyticsDashboard"
import UploadSection from "../components/UploadSection"
import NewsSection from "../components/NewsSection"
import Footer from "../components/Footer"

function Home() {

  const [predictions, setPredictions] = useState([
    450,
    480,
    500,
    530,
    560,
    590
  ])

  return (

    <div className="bg-black min-h-screen">

      <Navbar />

      <div id="dashboard">
        <HeroSlider />
      </div>

      <div id="forecast">
        <AnalyticsDashboard
          predictions={predictions}
        />
      </div>

      <div id="analytics">
        <UploadSection
          setPredictions={setPredictions}
        />
      </div>

      <div id="reports">
        <NewsSection />
      </div>

      <Footer />

    </div>
  )
}

export default Home