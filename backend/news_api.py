import requests

API_KEY = "78329dcd6c5f56fb4d3f0ce982aa65c8"

def get_news():

    url = f"https://gnews.io/api/v4/search?q=coal&lang=en&max=10&apikey={API_KEY}"

    response = requests.get(url)

    data = response.json()

    print(data)

    if "articles" in data:

        return data["articles"]

    return []