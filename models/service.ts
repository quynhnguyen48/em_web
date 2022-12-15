import axios from 'axios';

export class ServiceApi {
  async getAll() {
    var v = await axios.get("localhost:1337" + '/api/services');
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
    var v = await axios.get("localhost:1337" + '/api/service/findOne/' + slug);
    var blogs = v.data.service;
    var result = new Service();
    if (blogs) {
      result.label = blogs.label;
      result.slug = blogs.slug;
      result.desc = blogs.desc;
      result.detail = blogs.detail;
    } else {
      result.label = "";
      result.slug = "";
      result.desc = "";
      result.detail = "";
    }
    return result;
  }
}

class Service {
  label!: string;
  slug!: string;
  desc!: string;
  price!: string;
  detail!: string;
}