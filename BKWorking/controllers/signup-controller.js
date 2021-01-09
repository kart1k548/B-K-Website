exports.signupPage = (req,res,next) =>{
    res.render('viewer/signup',{
        pageTitle: "B&K Signup"
    });
}