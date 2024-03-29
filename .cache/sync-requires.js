const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Marcus\\TNGD36\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Marcus\\TNGD36\\src\\pages\\index.js"))),
  "component---src-pages-maasai-page-js": hot(preferDefault(require("C:\\Users\\Marcus\\TNGD36\\src\\pages\\maasai-page.js"))),
  "component---src-pages-savanna-page-js": hot(preferDefault(require("C:\\Users\\Marcus\\TNGD36\\src\\pages\\savanna-page.js")))
}

