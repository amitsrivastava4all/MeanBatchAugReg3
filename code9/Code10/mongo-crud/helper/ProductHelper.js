const productHelper= {
    printProducts(productArray,response){
            if(productArray.length>0){
               response.render('product',{products:productArray});
            }
    }
}
module.exports = productHelper;