import axios from 'axios';

export class BlogApi {
  async getAll() {

    var v = await axios.get('https://713a-54-91-167-122.ngrok.io/api/blogs');
    var blogs = v.data.data;

    const result = blogs.map( (d:any) => {
      let v = new Blog();
      v.slug = d.attributes.slug;
      return v;
    })
    return result;
  }
}

class Blog {
  title: string | undefined; 
  slug!: string;
}