import { useState } from "react"
import axios from "axios"

function UploadSection({ setPredictions }) {

  const [file, setFile] = useState(null)

  const [response, setResponse] = useState(null)

  const uploadFile = async () => {

    if (!file) {

      alert("Please select dataset")

      return
    }

    const formData = new FormData()

    formData.append("file", file)

    try {

      const res = await axios.post(
        "http://127.0.0.1:5000/upload",
        formData
      )

      setResponse(res.data)

      setPredictions(res.data.predictions)

    }

    catch (error) {

      console.log(error)

      alert("Backend connection failed")
    }
  }

  return (

    <div className="bg-black py-20 text-center px-6">

      <h1 className="text-5xl text-orange-500 font-bold mb-8">
        Dataset Upload System
      </h1>

      <p className="text-gray-400 mb-14 text-lg">
        Upload industrial energy or coal datasets for AI forecasting
      </p>

      <div className="bg-gray-900 max-w-2xl mx-auto p-12 rounded-3xl shadow-2xl border border-gray-800">

        {/* FILE SELECT */}

        <div className="flex flex-col items-center gap-6">

          <label className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl cursor-pointer text-xl font-semibold shadow-xl transition duration-300">

            Choose Dataset

            <input
              type="file"
              className="hidden"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />

          </label>

          {
            file && (

              <p className="text-green-400 text-lg">
                Selected File: {file.name}
              </p>
            )
          }

        </div>

        {/* UPLOAD BUTTON */}

        <button
          onClick={uploadFile}
          className="mt-10 bg-gradient-to-r from-orange-500 to-red-600 hover:scale-105 transition duration-300 px-10 py-5 rounded-2xl text-white text-xl font-bold shadow-2xl"
        >
          Upload & Train AI Model
        </button>

        {/* RESULTS */}

        {response && (

          <div className="mt-14 text-white text-left">

            <h2 className="text-4xl text-green-400 mb-10 text-center font-bold">
              AI Prediction Results
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">

              <div className="bg-black p-6 rounded-2xl border border-gray-800">

                <p className="text-gray-400 mb-2">
                  Dataset Rows
                </p>

                <h3 className="text-4xl font-bold text-orange-500">
                  {response.rows}
                </h3>

              </div>

              <div className="bg-black p-6 rounded-2xl border border-gray-800">

                <p className="text-gray-400 mb-2">
                  Model Accuracy
                </p>

                <h3 className="text-4xl font-bold text-green-400">
                  {response.accuracy}%
                </h3>

              </div>

              <div className="bg-black p-6 rounded-2xl border border-gray-800">

                <p className="text-gray-400 mb-2">
                  RMSE Error
                </p>

                <h3 className="text-4xl font-bold text-blue-400">
                  {response.rmse}
                </h3>

              </div>

              <div className="bg-black p-6 rounded-2xl border border-gray-800">

                <p className="text-gray-400 mb-2">
                  Forecast Trend
                </p>

                <h3 className="text-3xl font-bold text-red-400">
                  {response.trend}
                </h3>

              </div>

            </div>

            {/* PREDICTIONS */}

            <div className="bg-black p-8 rounded-3xl border border-gray-800">

              <h3 className="text-3xl font-bold text-orange-500 mb-8 text-center">
                Future Coal Demand Forecast
              </h3>

              <div className="space-y-5">

                {response.predictions.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="bg-gray-900 p-5 rounded-2xl flex justify-between items-center"
                    >

                      <p className="text-lg text-gray-300">

                        Future Month {index + 1}

                      </p>

                      <h3 className="text-2xl font-bold text-green-400">

                        {item}

                      </h3>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default UploadSection