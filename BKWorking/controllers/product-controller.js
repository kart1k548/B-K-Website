exports.productPage = (req,res,next) =>{
    res.render('viewer/products',{
        pageTitle: "B&K List"
    });
}

exports.checkoutPage = (req,res,next) =>{
    res.render('viewer/checkout',{
        pageTitle: "B&K Checkout"
    });
}