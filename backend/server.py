from flask import Flask, request, jsonify
from dotenv import dotenv_values
import os
from openai import AzureOpenAI
from flask_cors import CORS

config = dotenv_values(".env")

# Client for OpenAI model using AzureOpenAI
client = AzureOpenAI(
    api_key=config["AZURE_OPENAI_API_KEY"],
    api_version="2024-02-01",
    azure_endpoint=config["AZURE_OPENAI_ENDPOINT"],
)

app = Flask(__name__)
CORS(app)

# prompt = "How can i know if I am eligible for different government schemes"
# response = client.chat.completions.create(
#         model="gpt-35-turbo",
#         messages = [{"role": "system", "content":"You are a chatbot for the Singapore Government that answers the questions accurately and succinctly to help businesses with their problems. Instructions: - Only answer questions about Singapore government. - If you are unsure about the question or if asked about things outside of Singapore, then reply with 'I am not sure'. - Try to answer the questions by directing them to different pages in this website before linking to other government website. Context: - In the services page of our website, it has all the info about various government grants, loans and services. - In the network page, we can connect with other Singapore businesses."},
#                     {"role": "user", "content": prompt}],
#         max_tokens=200,
#         temperature=0,
#     )
# print(response.choices[0].message.content)

# Contains the Instructions for the model to follow
# conversations = [{"role": "system", "content":"You are a chatbot for the Singapore Government that answers the questions accurately and succinctly to help businesses with their problems. Instructions: - Only answer questions about Singapore government. - If you are unsure about the question, then reply with 'I am not sure'. Context: - In the services page of our website, it has info about govt services. - In the network page, we can connect with other Singapore businesses."}]


@app.route("/chatbot", methods=["POST"])
def openAI():
    conversations = request.json["messages"]
    print(conversations)
    response = client.chat.completions.create(
        model="gpt-35-turbo",
        messages=conversations,
        max_tokens=200,
        temperature=0,
    )
    conversations.append(
        {"role": "assistant", "content": response.choices[0].message.content}
    )

    return jsonify({"conversations": conversations}), 200

if __name__ == "__main__":
    app.run(debug=True)
