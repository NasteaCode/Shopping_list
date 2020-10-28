const express = require("express");
const Item = require("./item");
const app = express();

const itemRoutes = require("./itemRoutes");

app.unsubscribe(express.json());




app.get(
  "/items",
  function(req, res, next) {
    // we're getting the data from db so no need to check for errors
    try {
      return res.json(
        {
          items: Item.listofitems();
        }
      )
    } catch(error) {
      return next(error);
    }
  }
)


app.post(
  "/items",
  function(req, res, next) {
    try {
      if(req.query === {}) {
        throw 
      } else {
        Item.add(req.uery);
      }
      
    } catch {

    }
  }
)

app.get()




app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});


module.exports = app;