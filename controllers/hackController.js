const Hack = require("../models/Hack");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res) => {
    const user = new Hack(req.body);
    user.save((err, data) => {
        if (err) return res.status(400).json({
            error: errorHandler(err),
            reason:'Error'
        });

        res.json(data);
    });

}