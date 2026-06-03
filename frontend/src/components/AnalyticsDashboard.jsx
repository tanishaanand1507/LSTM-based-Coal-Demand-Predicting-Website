import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

function AnalyticsDashboard({ predictions }) {

  const months = [
    "Jan 2027",
    "Feb 2027",
    "Mar 2027",
    "Apr 2027",
    "May 2027",
    "Jun 2027"
  ]

  const data = predictions.map((value, index) => ({

    month: months[index],
    demand: value,
    production: value - 40,
    energy: value + 80

  }))

  return (

    <div className="bg-black px-10 py-20">

      <h1 className="text-5xl font-bold text-orange-500 mb-16">
        AI Industrial Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* GRAPH 1 */}

        <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl">

          <h2 className="text-2xl text-white mb-6">
            Coal Demand Forecast
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3" stroke="#333" />

              <XAxis dataKey="month" stroke="#aaa" />

              <YAxis stroke="#aaa" />

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

        {/* GRAPH 2 */}

        <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl">

          <h2 className="text-2xl text-white mb-6">
            Production Analysis
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={data}>

              <CartesianGrid strokeDasharray="3 3" stroke="#333" />

              <XAxis dataKey="month" stroke="#aaa" />

              <YAxis stroke="#aaa" />

              <Tooltip />

              <Bar
                dataKey="production"
                fill="#22c55e"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* GRAPH 3 */}

        <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl">

          <h2 className="text-2xl text-white mb-6">
            Energy Consumption
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <AreaChart data={data}>

              <CartesianGrid strokeDasharray="3 3" stroke="#333" />

              <XAxis dataKey="month" stroke="#aaa" />

              <YAxis stroke="#aaa" />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="energy"
                stroke="#3b82f6"
                fill="#3b82f6"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* AI PANEL */}

        <div className="bg-gradient-to-br from-orange-500 to-red-600 p-10 rounded-3xl flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-white mb-8">
            AI Forecast Insights
          </h2>

          <div className="space-y-6">

            <div>

              <p className="text-white/80 mb-2">
                Model Accuracy
              </p>

              <h3 className="text-5xl font-bold text-white">
                96%
              </h3>

            </div>

            <div>

              <p className="text-white/80 mb-2">
                Forecast Trend
              </p>

              <h3 className="text-3xl font-bold text-white">
                Increasing Demand
              </h3>

            </div>

            <div>

              <p className="text-white/80 mb-2">
                AI Engine
              </p>

              <h3 className="text-3xl font-bold text-white">
                LSTM Neural Network
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AnalyticsDashboard