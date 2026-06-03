import { useEffect, useState } from "react"
import axios from "axios"

function NewsSection() {

  const [news, setNews] = useState([])

  useEffect(() => {

    fetchNews()

    const interval = setInterval(() => {

      fetchNews()

    }, 30000)

    return () => clearInterval(interval)

  }, [])

  const fetchNews = async () => {

    const res = await axios.get(
      "http://127.0.0.1:5000/news"
    )

    setNews(res.data)
  }

  return (

    <div className="bg-black px-10 py-20">

      <h1 className="text-5xl text-orange-500 font-bold mb-16">
        Live Coal Industry News
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {
          news.map((item, index) => (

            <a
              href={item.url}
              target="_blank"
              key={index}
              className="bg-gray-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
            >

              <img
                src={item.image}
                alt=""
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-xl text-white mb-4">
                  {item.title}
                </h2>

                <p className="text-gray-400">
                  {item.description}
                </p>

              </div>

            </a>
          ))
        }

      </div>

    </div>
  )
}

export default NewsSection