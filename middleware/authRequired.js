module.exports = function(req, res, next){
//if user session exists continue, if not redirect to log in
if (req.session.currentUser){
    next();
} else {
    res.redirect("/login");
}
}