All credit goes to [David Katz](https://github.com/15Dkatz/beat-cors-server) - Thank you very much!

I had to configure this to work with Netlify, the instructions to do that are [here.](https://dev.to/owenconti/how-to-deploy-express-js-apps-on-netlify-4alh)

## Beat Cors Server
This project is an example of how to set up a proxy server to help frontends running in the browser beat the same origin policy.

The idea is to use express middleware to apply `res.header('Access-Control-Allow-Origin', '*');` around requests to another server, with a more strict CORS setting.

That way, a server-to-server request could be completed, where the browser's same-origin policy would block it.

See the original article for a full walkthrough: [https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9z](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9)

### Run the server
```
npm i
npm run start
```

Then visit `localhost:3000/jokes/random`.

#### Enjoy!

