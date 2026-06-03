function AnalyticsCards() {

  const cards = [
    {
      title: "Coal Production",
      value: "2.3M Tons"
    },
    {
      title: "Demand Forecast",
      value: "+14%"
    },
    {
      title: "AI Accuracy",
      value: "94%"
    },
    {
      title: "Energy Usage",
      value: "1.8GW"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 py-16 bg-black">

      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 duration-300"
        >
          <h2 className="text-gray-400 text-lg mb-4">
            {card.title}
          </h2>

          <p className="text-4xl font-bold text-orange-500">
            {card.value}
          </p>
        </div>
      ))}

    </div>
  )
}

export default AnalyticsCards