import axios from 'axios';

export class ServiceApi {
  async getAll() {
    var v = await axios.get("http://54.91.167.122:1337" + '/api/services');
    var blogs = v.data.data;
    const result = blogs.map( (d:any) => {
      let v = new Service();
      v.slug = d.attributes.slug;
      v.label = d.attributes.label;
      return v;
    })
    return result;
  }

  async findOne(slug: string) {
    var v = await axios.get("http://54.91.167.122:1337" + '/api/service/findOne/' + slug);
    var blogs = v.data.service;
    var result = new Service();
    if (blogs) {
      result.id = blogs.id;
      result.label = blogs.label;
      result.slug = blogs.slug;
      result.desc = blogs.desc;
      result.detail = blogs.detail;
      result.image_url = blogs.image ? blogs.image.url : '';
      result.placeholder_image_url = blogs.image ? blogs.image.formats.small.url : '';
      result.price = blogs.price ?? 0;
    } else {
      result.id = "";
      result.label = "";
      result.slug = "";
      result.desc = "";
      result.detail = "";
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
  slug!: string;
  desc!: string;
  price!: any;
  detail!: string;
  image_url!: string;
  placeholder_image_url!: string;
  show_buy_btn: any;
}