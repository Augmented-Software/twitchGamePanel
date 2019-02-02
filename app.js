/* jshint esversion: 6 */
import express from 'express';
const app = express();
const router = express.Router();

const asyncMiddleware = fn => (req, res) => {
  Promise.resolve(fn(req, res))
  .catch(err => res.status(500).send(err.message));
};

router.get('/', asyncMiddleware(async (req, res) => {
  let
}));


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
