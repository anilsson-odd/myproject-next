const paths = {
  landing() {
    return '/';
  },

  store() {
    return '/store';
  },

  productsList(category) {
    return `/store/products/${category}`;
  },

  productDescription(category, productId) {
    return `/store/products/${category}/${productId}`;
  },

  checkout() {
    return '/store/checkout';
  },

  admin() {
    return '/store/admin';
  },
};

export default paths;
