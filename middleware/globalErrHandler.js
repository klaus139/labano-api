const globalErrHandler = (err, req, res, next) => {
    res.status(err.statusCode ? err.statusCode : 500)
    .json({status: err.status, message: err.message})
}

module.exports = globalErrHandler;