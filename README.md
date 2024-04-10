# HackOMania Project by Thejus, Sam, Pk, Shouhe
Over the 24 hour hackathon, we created a Single Source of Truth (SSOT) page for Government Schemes, Grants and Loans to help Small Medium Enterprises (SME) to expand and grow their business. 

## Problem Statement
The innumerous government schemes, grants and permits for businesses in Singapore has made it extremely difficult for them to know about the benefits and eligibility for them. Misinformations and imperfect information about these government services are becoming a 
growing issue because the information pertaining to them are spread over various government websites. This makes it understandably difficult for an average singaporean to check up on the services that he/she may need.

## Features
The app has the following features:
- **Login** - Login through Linkedin account. Profile image and other credentials obtained by communicating with Linkedin API post login.
- **Services Page** - Categorised schemes, permits and various other government services listed for easy access to check eligibility, benefits or specifications before applying for it via a form that can be sent directly to the concerning authorities.
- **ChatBot** - Uses Azure OpenAI API to call and prompt the LLM which has been configured to answer questions regarding various schemes, grants, etc to fill in any gaps of information in the webapp.
- **Universal Search** - Able to query through multiple Postgres (SQL) tables to return information on any page of the website.
- **Network Page** - Allows SMEs to post about their products or services that they want to sell for other SMEs to see. This brings greater exposure to them, allowing them to potentially gain clients and partners who want to work with them.

### Services Page
![main-page](https://github.com/thejus03/onepercent/assets/142730611/b5ec0e0f-1757-4458-bf6b-54a4e8e3517b)
### ChatBot using OpenAI API
![image_2024-04-10_11-45-06](https://github.com/thejus03/onepercent/assets/142730611/5bbc4db9-25df-4710-bfa9-5f0441dd6410)
### Network Page
![network-page](https://github.com/thejus03/onepercent/assets/142730611/a09a2843-33d1-49c8-a91b-00ff739a178a)

## Tech Stack
- Nextjs
- Tailwind CSS
- Flask
- Postgres SQL

## How to run
### Installation
1. Clone the repository and cd into `onepercent`
   ```bash
   git clone https://github.com/thejus03/onepercent
   cd onepercent
   ```
2. Install all npm packages
   ```bash
   npm i 
   ```
3. cd into `backend` folder and create a python virtual environment and install `requirements.txt`
   ```bash
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
## Run the app
1. On the `onepercent` directory, start Nextjs app
   ```bash
   npm run dev
   ```
2. On the `backend` directory, start the flask app
   ```bash
   python server.py
   ```
The Nextjs app is now running on localhost:3000 and the Flask backend is running on 127.0.0.1:8080
