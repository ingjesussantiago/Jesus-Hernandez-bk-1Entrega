class ProductManager {


    constructor() {
        this.products = []
    }

    getProducts() {
        return this.products
    }


    addProduct(title, description, thumbnail, price, code, categoria, stock = 30) {

        const product = {

            id: this.#agregarId(),
            title,
            description,
            thumbnail,
            price,
            code,
            categoria,
            stock,
        }
        if (!product.title || !product.description || !product.thumbnail || !product.price || !product.code || !product.categoria || !product.stock) {
            console.log("Tiene campos vacios son campos obligatorios");
            return this.products

        }

        if (this.products.find((p) => p.code === code)) {
            console.log("verifique el codigo, esta repetido");
            return code
        }


        this.products.push(product)
        console.log(product)

    }

    #agregarId() {


        const id = this.products.length === 0
            ? 1
            : this.products[this.products.length - 1].id + 1
        return id

    }

    #verificaCode() {


    }

    getProductById(id) {
        const products = this.products.find((p) => p.id === id);
        if (products) {
            return products;
        } else {
            console.log('Error: Not found');
        }
    }

}

const productos = new ProductManager();
const camisa = productos.addProduct("camisa deportiva", "algodon", "b", 200, 2, "ropa")
const camisados = productos.addProduct("camisa deportiva", "algodon", "b", 200, 3, "ropa")
const camisadoss = productos.addProduct("camisa deportiva", "algodon", "b", 200, 4, "ropa")

const prodctostotal=productos.getProducts()
console.log(prodctostotal);

const productporid1=productos.getProductById(3)
console.log(productporid1);