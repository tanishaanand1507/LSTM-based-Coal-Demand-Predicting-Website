function Navbar() {

  const scrollToSection = (id) => {

    const section = document.getElementById(id)

    section.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (

    <div className="bg-black border-b border-gray-800 px-10 py-6 flex justify-between items-center sticky top-0 z-50">

      <div className="flex items-center">

  <img
    src="/Screenshot 2026-06-02 112749.png"
    alt="CCL Logo"
    className="h-20 object-contain"
  />

</div>

      <div className="flex gap-8 text-white">

        <button
          onClick={() => scrollToSection("dashboard")}
          className="hover:text-orange-500"
        >
          Dashboard
        </button>

        <button
          onClick={() => scrollToSection("forecast")}
          className="hover:text-orange-500"
        >
          Forecast
        </button>

        <button
          onClick={() => scrollToSection("analytics")}
          className="hover:text-orange-500"
        >
          Analytics
        </button>

        <button
          onClick={() => scrollToSection("reports")}
          className="hover:text-orange-500"
        >
          Reports
        </button>

      </div>

    </div>
  )
}

export default Navbar