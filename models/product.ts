export class ProductApi {
  async getAll() {

    // var v = await axios.get('https://api.echomedi.me/api/products');
    var v = await fetch('https://api.echomedi.me/api/products?pagination[page]=1&pagination[pageSize]=10000')
        .then((response) => response.json());

    var blogs = v.data;

    const result = blogs.map( (d:any) => {
      let v = new Product();
      v.slug = d.attributes.slug;
      return v;
    })
    return result;
  }

  async findOne(slug: string) {
    var v = await fetch("https://api.echomedi.me" + '/api/product/findOne/' + slug)
        .then((response) => response.json());
    // var v2 = await axios.get("https://api.echomedi.me" + '/api/product/findOne/' + slug);
    var product = v.product;
    var result = new Product();
    result.label = product.label;
    result.en_label = product.en_label;
    result.slug = product.slug;
    result.desc = product.desc;
    result.en_desc = product.en_desc;
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
  en_label!: string;
  slug!: string;
  desc!: string;
  en_desc!: string;
  image_url!: string;
  image_placeholder_url!: string;
  price!: number;
  medicines: any;
}