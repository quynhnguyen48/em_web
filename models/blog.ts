export class BlogApi {
  async getAll() {
    var v = await fetch(
      "https://api.echomedi.me" + 
      // "http://localhost:1337" +
    '/api/blogs?pagination[page]=1&pagination[pageSize]=10000')
        .then((response) => response.json());
    var blogs = v.data;
    console.log('blogs', blogs)
    const result = blogs.map( (d:any) => {
      let v = new Blog();
      v.slug = d.attributes.slug;
      v.article = d.attributes.article;
      // v.label = d.attributes.label;
      return v;
    })
    return result;
  }

  async findOne(slug: string) {
    var v = await fetch(
      "https://api.echomedi.me" + 
      // "http://localhost:1337" +
      '/api/blog/findOne/' + slug)
      .then((response) => response.json());
    var blogs = v.blog;
    var result = new Blog();
    console.log('blogs', blogs)
    if (blogs) {
      // result.id = blogs.id;
      result.label = blogs.label;
      // result.en_label = blogs.en_label;
      // result.en_desc = blogs.en_desc;
      // result.en_detail = blogs.en_detail;
      result.slug = blogs.slug;
      // result.desc = blogs.desc;
      result.article = blogs.article;
      result.image_url = blogs.image ? blogs.image.url : '';
      // result.placeholder_image_url = blogs.image ? blogs.image.formats.thumbnail.url : '';
      // result.price = blogs.price ?? 0;
      // result.show_buy_btn = blogs.show_buy_btn;
      // result.show_inquiry_form = blogs.show_inquiry_form;
      // result.show_booking_btn = blogs.show_booking_btn;
    } else {
      // result.id = "";
      result.label = "";
      result.slug = "";
      // result.desc = "";
      result.article = "";
      // result.en_label = "";
      // result.en_detail = "";
      // result.en_desc = "";
      result.image_url = "";
      // result.placeholder_image_url = "";
      // result.price = "";
      // result.show_booking_btn = "";
      // result.show_inquiry_form = "";
    }
    return result;
  }
}

class Blog {
  // id!: string;
  label!: string;
  // en_label!: string;
  slug!: string;
  // desc!: string;
  // en_desc!: string;
  // price!: any;
  article!: string;
  // en_detail!: string;
  image_url!: string;
  // placeholder_image_url!: string;
  // show_buy_btn: any;
  // show_booking_btn: any;
  // show_inquiry_form: any;
}