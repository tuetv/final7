module.exports = {
    check_authentication: function (req, res, next) {
    if(!req.headers || !req.headers.authorization){
            throw new Error("ban chua dang nhap")
        }
    }

//    let authorization = req.headers.authorization();
}