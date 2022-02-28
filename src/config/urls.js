/* eslint-disable import/no-anonymous-default-export */
//b14966e1b265409889ab6731874a93e5
//b6e0dc063e804b4688aac2d8a845a6fb
//87f9aa88338247899404832fbaadee92
//459bff44f45e452cb432ea119e894a52
export default {
  users: {
    base: "http://localhost:5000",
  },
  products: {
    base: "https://api.spoonacular.com/food/products/",
    search: (productName) =>
      `search?query=${productName}&number=20&apiKey=b14966e1b265409889ab6731874a93e5`,
  },
};
