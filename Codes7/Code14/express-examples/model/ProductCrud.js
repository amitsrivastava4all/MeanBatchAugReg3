const Product= require("./Products");
const productOperations={
    productList:[],
    add(){
        for(let i = 1; i<=5 ; i++){
            let product = new Product(i,"Apple"+i,9000+i,"https://i-cdn.phonearena.com/images/phones/42885-xlarge/Apple-iPhone-5s-0.jpg");
             this.productList.push(product);   
        }
    }
}
module.exports = productOperations;
