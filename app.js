/* jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const config = {
  'ClientID': process.env.TWITCH_CLIENT_ID
};

  app.use(bodyParser.json());
  app.get('https://api.twitch.tv/kraken/channels/152033881/' + config.ClientID, function(request, response) {

/*    let options = {
      headers: {
        ClientID: 'se6fitx48a5t0ilz3teehwa5o6xohk'
      }
    };
*/
    console.log(request.params);
  });

app.listen(8080);

/*

const router = express.Router();

const asyncMiddleware = fn => (req, res) => {
  Promise.resolve(fn(req, res))
  .catch(err => res.status(500).send(err.message));
};

router.get('/', asyncMiddleware(async (req, res) => {
  let
}));
/*


/* the below line requests my account (retrieved the id already) and reveals the current set game*/
// https://api.twitch.tv/kraken/channels/152033881/

/*
//if a game is returned from the request
if (user.game) {
  //check if game is in list

  switch(user.game) {
    case gameList.game1:
      console.log('game is already most recent game');
      break;

    case gameList.game2:
    //bump game to top of list
    break;

    case gameList.game3:
    //bump game to top of list
    break;

    case gameList.game4:
    //bump game to top of list
    break;

    case gameList.game5:
    //bump game to top of list
    break;

    case gameList.game6:
    //bump game to top of list
    break;

    case gameList.game7:
    //bump game to top of list
    break;

    case gameList.game8:
    //bump game to top of list
    break;

    case gameList.game9:
    //bump game to top of list
    break;

    case gameList.game10:
    //bump game to top of list
    break;

    default:
    //game is not on list so add it
}

};
*/
