exports.homePage = (req,res,next) =>{
    res.render('viewer/Home',{
        pageTitle: "B&K Home"
    });
}