from pymongo import MongoClient

client = MongoClient(
    "mongodb://localhost:27017/"
)

db = client["coal_ai"]

users_collection = db["users"]