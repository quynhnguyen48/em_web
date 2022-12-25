export class PackagesApi {
  async getAll() {
    var v = await fetch("http://3.89.245.84:1337" + '/api/packages?pagination[page]=1&pagination[pageSize]=10000')
        .then((response) => response.json());
    var blogs = v.data;
    const result = blogs.map( (d:any) => {
      let v = new Package();
      v.slug = d.attributes.slug;
      return v;
    })
    return result;
  }

  async findOne(slug: string) {
    var v = await fetch("http://3.89.245.84:1337" + '/api/package/findOne/' + slug)
    .then((response) => response.json());
    var blogs = v.package;
    var result = new Package();
    result.label = blogs.label;
    result.en_label = blogs.en_label;
    result.slug = blogs.slug;
    result.sub_packages = blogs.sub_packages;
    result.desc = blogs.desc;
    result.en_desc = blogs.en_desc;
    result.image_url = blogs.hero_img ? blogs.hero_img.formats.medium.url : '';
    return result;
  }
}

class Package {
  label!: string;
  en_label!: string;
  slug!: string;
  sub_packages: any;
  desc!: string;
  en_desc!: string;
  image_url!: string;
  show_buy_btn: any;
}