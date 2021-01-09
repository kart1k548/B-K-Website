exports.loginPage = (req,res,next) =>{
    res.render('viewer/login',{
        pageTitle: "B&K Login"
    });
}