const database = require("./database");

const getPeople = (req, res) => {
    database.query("select * from people")
    .then(([people]) => {
        res.json(people);})
        .catch((err) => {console.error(err);
        res.status(500).send("Error retrieving data from database");});
};


module.exports = {
    getPeople,
}