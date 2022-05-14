(() => {

  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos 
      console.log('Guardando en base de datos', product);
    }
  }

  class Mailing {
    private masterEmail: string = 'paco@paco.paco';

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
      console.log('Sending email...', template, emailList);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailing: Mailing;

    constructor(productService: ProductService, mailing: Mailing) {
      this.productService = productService;
      this.mailing = mailing;
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos 
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailing.sendEmail(['pepe@pepe.es', 'juan@juan.es'], 'to-clients');
    }
  }

  class CartBloc {
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId);
    }
  }

  const productService = new ProductService();
  const mailing = new Mailing();

  const productBloc = new ProductBloc(productService, mailing);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();