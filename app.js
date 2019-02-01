/* jshint esversion: 6 */
import express from 'express';

const router = express.Router();

const asyncMiddleware = fn => (req, res) => {
  Promise.resolve(fn(req, res))
  .catch(err => res.status(500).send(err.message));
};

router.get('/', asyncMiddleware(async (req, res) => {
  let
}));
