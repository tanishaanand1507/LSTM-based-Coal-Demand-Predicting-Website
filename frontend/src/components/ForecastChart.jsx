import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

function ForecastChart({ predictions }) {

  const data = predictions.map((value, index) => ({
    month: `M${index + 1}`,
    demand: value
  }))

  return (

    <div className="bg-black px-10 py-20">

      <h1 className="text-4xl font-bold text-orange-500 mb-12">
        AI Coal Demand Forecast
      </h1>

      <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">

        <ResponsiveContainer width="100%" height={400}>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" stroke="#333" />

            <XAxis dataKey="month" stroke="#999" />

            <YAxis stroke="#999" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="demand"
              stroke="#f97316"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default ForecastChart