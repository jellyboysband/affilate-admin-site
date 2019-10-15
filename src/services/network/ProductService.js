import axios from 'axios';
class ProductService {
  static get() {
    return axios.get(`${window.env.API_URL}/admin/product`).then(response => response.data);
  }
  static send(data) {
    return axios.post(`${window.env.API_URL}/admin/product`, data).then(response => response.data);
  }
}

export default ProductService;
