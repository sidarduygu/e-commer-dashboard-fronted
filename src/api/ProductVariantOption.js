import {
  get, post, patch, _delete
} from '@/api/Api';

const MODULE_NAME = 'product-variant-option'

export default class ProductVariantOption {

  static async get() {
    return get('product-variant-option');
  }

  static async paginator(url) {
    return get(url);
  }

  static async find(id) {
    return get(`${'product-variant-option'}/${id}`);
  }

  static async create(data) {
    return post('product-variant-option', data);
  }

  static async update(data) {
    return patch(`${'product-variant-option'}/${data.id}`, data);
  }

  static async delete(id) {
    return _delete(`${'product-variant-option'}/${id}`);
  }
}
