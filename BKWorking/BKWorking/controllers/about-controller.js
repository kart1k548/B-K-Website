exports.aboutPage = (req,res,next) =>{
    res.render('viewer/about',{
        pageTitle: "B&K About"
    });
}