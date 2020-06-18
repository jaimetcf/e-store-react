/////////////////////////////////////////////////////////////////////////////
// This class just provides simulated data for the app, enabling the test
// of this frontend without the connection to the node server
import faker   from 'faker';


const newProducts = [
    {
      id: "0",
      name: "Camera Canon Preta",
      code: "C-109",
      description: "Câmera de Alta Resolução",
      category: "Cameras",
      brand: "Canon",
      image: "https://images.unsplash.com/photo-1478131535094-78de1c9450ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      information: faker.lorem.sentences(),
      price: "400,00",
      qty: 1
    },
    {
      id: "8",
      name: "Headphone fio Flatlay",
      code: "FTH-09",
      description: "Fone sem fio Flatlay",
      category: "Phones",
      brand: "Flatlay",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      information: faker.lorem.sentences(),
      price: "399,00",
      qty: 3
    }
];
  
const products = [
    {
      id: "0",
      name: "Camera Canon Preta",
      code: "C-109",
      description: "Câmera de Alta Resolução",
      category: "Cameras",
      brand: "Canon",
      image: "https://images.unsplash.com/photo-1478131535094-78de1c9450ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      information: faker.lorem.sentences(),
      price: "400,00",
      qty: 1
    },
    {
      id: "8",
      name: "Headphone fio Flatlay",
      code: "FTH-09",
      description: "Fone sem fio Flatlay",
      category: "Phones",
      brand: "Flatlay",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      information: faker.lorem.sentences(),
      price: "399,00",
      qty: 3
    },
    {
      id: "2",
      name: "GoPro HERO 5",
      code: "HEC-101",
      description: "Camera GoPro HERO",
      category: "Cameras",
      brand: "HERO",
      image: "https://images.unsplash.com/photo-1503072181166-d28c4e6c1b3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      information: faker.lorem.sentences(),
      price: "298,00",
      qty: 12
    },
    {
      id: "4",
      name: "Fone Slack E",
      code: "PHF-10",
      description: "Fone Philips Preto",
      category: "Phones",
      brand: "Philips",
      image: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
      information: faker.lorem.sentences(),
      price: "322,00",
      qty: 4
    },
    {
      id: "5",
      name: "Apple Watch Space",
      code: "APW-01",
      description: "Apple Watch Space Gray",
      category: "Watches",
      brand: "Apple",
      image: "https://images.unsplash.com/photo-1548761013-616652707ab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
      information: faker.lorem.sentences(),
      price: "780,00",
      qty: 3
    },
    {
      id: "6",
      name: "Apple Watch Green",
      code: "APW-07",
      description: "Apple Watch G",
      category: "Watches",
      brand: "Apple",
      image: "https://images.unsplash.com/photo-1554116154-e733de92fe4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
      information: faker.lorem.sentences(),
      price: "910,00",
      qty: 10
    },
    {
      id: "7",
      name: "iPad Apple",
      code: "API-02",
      description: "iPad Apple Slimmer",
      category: "iPads",
      brand: "Apple",
      image: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
      information: faker.lorem.sentences(),
      price: "2479,00",
      qty: 1
    },
    {
      id: "1",
      name: "Headphone Beats Silver",
      code: "BTH-01",
      description: "Fones de Ouvido Beats Silver Preto",
      category: "Phones",
      brand: "Beats",
      image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      information: faker.lorem.sentences(),
      price: "124,00",
      qty: 2
    },
    {
      id: "3",
      name: "Shaver M. Philips",
      code: "PHS-11",
      description: "Barbeador Portátil Masculino Philips",
      category: "Shavers",
      brand: "Philips",
      image: "https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      information: faker.lorem.sentences(),
      price: "157,00",
      qty: 4
    }
];
  
  const sales = [
    {
      id: "1",
      name: "Headphone Beats Silver",
      code: "BTH-01",
      description: "Fones de Ouvido Beats Silver Preto",
      category: "Phones",
      brand: "Beats",
      image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      information: faker.lorem.sentences(),
      price: "124,00",
      qty: 2
    },
    {
      id: "3",
      name: "Shaver M. Philips",
      code: "PHS-11",
      description: "Barbeador Portátil Masculino Philips",
      category: "Shavers",
      brand: "Philips",
      image: "https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      information: faker.lorem.sentences(),
      price: "157,00",
      qty: 4
    },
];

  
class  DbFaker {

    constructor(props)
    {
        this.newProducts = newProducts;
        this.products    = products;
        this.sales       = sales;        
    }

    getNewProducts = () =>  {  return( this.newProducts );  }
    getProducts    = () =>  {  return( this.products    );  }
    getSales       = () =>  {  return( this.sales       );  }

    getProductById = (id) =>  {
        for(var product of this.products) {
            if( product.id === id)  return(product);
        }
    }
}


export default  DbFaker;