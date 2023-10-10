class ProductManager {
    constructor (){
        this.products= [];
    }

    addProduct(title, description, price, thumbnail,code, stock){
    const product ={
        title,
        description,
        price,
        thumbnail,
        code,
        stock
        }
    this.products.push(product)
    }
}