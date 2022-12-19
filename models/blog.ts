import axios from 'axios';

export class ProductApi {
  async getAll() {

    var v = await axios.get('http://54.91.167.122:1337/api/products');
    var blogs = v.data.data;

    const result = blogs.map( (d:any) => {
      let v = new Product();
      v.slug = d.attributes.slug;
      return v;
    })
    return result;
  }

  async findOne(slug: string) {
    var v = await axios.get("http://54.91.167.122:1337" + '/api/product/findOne/' + slug);
    var product = v.data.product;
    var result = new Product();
    result.label = product.label;
    result.slug = product.slug;
    result.desc = product.desc;
    result.price = product.price;
    result.image_url = product.image ? product.image.url : '';
    result.image_placeholder_url = product.image ? product.image.formats.thumbnail.url : "";
    result.medicines = product.medicines;
    result.id = product.id;
    return result;
  }
}

class Product {
  id!: string;
  label!: string;
  slug!: string;
  desc!: string;
  image_url!: string;
  image_placeholder_url!: string;
  price!: number;
  medicines: any;
}