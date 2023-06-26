# Get Your Steps In
This project is a culmination of the work undertaken by Team Ctrl Alt Elite during project phase of the Northcoders Software Engineering Bootcamp. The team comprises of members: [Saima Khanom](https://github.com/saimakhanom), [Nadia Ibrahim](https://github.com/NadiaIb), [Dave Hickman](https://github.com/dave-hickman), [Jorge Martin](https://github.com/jorgemf2604) and [Joel Morton](https://github.com/Joelymodevs).

"Get Your Steps In" is an immersive 3D game developed using React as the foundation, while leveraging React-Three-Fiber to construct the captivating virtual environment. Additionally, the game harnesses the power of Rapier as its physics engine. The primary objective of the game is to skillfully navigate all obstacles in the runner's path in order to boost their step count. Upon successfully reaching the end of this obstacle-laden route, players are rewarded with a trip to the kebab shop!

The backend for this app uses mongoDB to store data relating to users who have played the game and want to save their scores to the leaderboard. The REST API fetches the data from the database sorted by scores highest to lowest, as well as only fetching scores from the last 7 days. It also handles post requests from the frontend app when users post their scores to the leaderboard.

The hosted version of the API as well as the endpoints available can be viewed [here](https://be-get-your-steps-in.onrender.com).

## Getting Started

To run this project locally, you can fork this repo or clone as follows:
```
git clone https://github.com/saimakhanom/backend-get-your-steps-in.git
cd backend-get-your-steps-in
```

Once in the project directory, run the following command to install the required dependencies for the project and start the app:

```
npm install
npm run dev
```

## Minimum requirements

To run this project, you will need the following:
- Node: v18.12.1
- npm: 8.19.2

## Testing
To test all existing endpoints for the app, run the follwoing command:
```
npm t
```

Each individual test is set up to test the accepted HTTP methods for each endpoint. The tests also cover successful responses and error-handling. They will also test that the body of the JSON response object is in the correct format, if applicable.

## Tech Stack
This project uses:
- [Express](https://devdocs.io/express/): a fast and minimalist web application framework for Node.js
- [MongoDB](https://www.mongodb.com/docs/): a popular NoSQL database for storing and retrieving data
- [Nodemon](https://nodemon.io/): a utility for monitoring and automatically restarting the server during development

### Testing
- [Jest](https://jestjs.io/docs/getting-started): a JavaScript testing framework for unit testing and assertions
- [Jest-Sorted](https://www.npmjs.com/package/jest-sorted): an extension for Jest to enable sorting assertions
- [Supertest](https://www.npmjs.com/package/supertest): a library for testing HTTP requests and responses

This project is the property of [Northcoders](https://northcoders.com/our-courses/skills-bootcamp-in-coding?utm_term=northcoders&utm_campaign=Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=5738903014&hsa_net=adwords&hsa_cam=14960254281&hsa_ad=553476276203&hsa_kw=northcoders&hsa_grp=135291806144&hsa_mt=e&hsa_ver=3&hsa_src=g&hsa_tgt=kwd-379636631169&gclid=CjwKCAjwv8qkBhAnEiwAkY-ahvvexIeMfa5rWe0Vt1QJGN3Na7CcRJYFvAUrY0oB8I_gzdFru77dhxoCU-UQAvD_BwE).
