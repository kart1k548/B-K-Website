exports.productPage = (req,res,next) =>{
    res.render('viewer/products',{
        pageTitle: "B&K Products"
    });
}