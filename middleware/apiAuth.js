function checkOrigin(req, res, next) {
    const allowedOrigins = [process.env.FRONTEND_URL_1, process.env.FRONTEND_URL_2];

    const origin = req.headers.origin;
    if ((origin && allowedOrigins.includes(origin)) || allowedOrigins.includes(req.headers.host)) {
        res.setHeader('Access-Control-Allow-Origin', origin ?? req.headers.host ?? "*");
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    } else {
        return res.status(403).json({ error: 'Forbidden' });
    }

    next();
}



module.exports = checkOrigin;
