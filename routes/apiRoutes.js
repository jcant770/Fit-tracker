const db = require("../models");

module.exports = function(app){
    app.get("/api/workout", function(req, res){
      db.find({}).then(data =>{
        res.json(data)
      })
      .catch(err => {
          res.json(err)
      })
    });

    app.post("/api/workout", function(req, res){
        db.create({}).then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });

    app.put("/api/workout/:id", ({body, params}, res)=>{
        db.findByIdAndUpdate(
            params.id,
            {$push:{exercises:body} },
            {new: true}
        )
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
    });
};
