export class ServiceApi {
  async getAll() {
    // var v = await axios.get("http://3.89.245.84:1337" + '/api/services');
    // var blogs = v.data.data;
    var v = await fetch("http://3.89.245.84:1337" + '/api/services?pagination[page]=1&pagination[pageSize]=10000')
        .then((response) => response.json());
    var blogs = v.data;
    const result = blogs.map( (d:any) => {
      let v = new Service();
      v.slug = d.attributes.slug;
      v.label = d.attributes.label;
      return v;
    })
    return result;
  }

  async findOne(slug: string) {
    var v = await fetch("http://3.89.245.84:1337" + '/api/service/findOne/' + slug)
    .then((response) => response.json());
    var blogs = v.package;
    // var v = await axios.get("http://3.89.245.84:1337" + '/api/service/findOne/' + slug);
    var blogs = v.service;
    var result = new Service();
    if (blogs) {
      result.id = blogs.id;
      result.label = blogs.label;
      result.en_label = blogs.en_label;
      result.en_desc = blogs.en_desc;
      result.en_detail = blogs.en_detail;
      result.slug = blogs.slug;
      result.desc = blogs.desc;
      result.detail = blogs.detail;
      result.image_url = blogs.image ? blogs.image.url : '';
      result.placeholder_image_url = blogs.image ? blogs.image.formats.thumbnail.url : '';
      result.price = blogs.price ?? 0;
      result.show_buy_btn = blogs.show_buy_btn;
    } else {
      result.id = "";
      result.label = "";
      result.slug = "";
      result.desc = "";
      result.detail = "";
      result.en_label = "";
      result.en_detail = "";
      result.en_desc = "";
      result.image_url = "";
      result.placeholder_image_url = "";
      result.price = "";
    }
    return result;
  }
}

class Service {
  id!: string;
  label!: string;
  en_label!: string;
  slug!: string;
  desc!: string;
  en_desc!: string;
  price!: any;
  detail!: string;
  en_detail!: string;
  image_url!: string;
  placeholder_image_url!: string;
  show_buy_btn: any;
}