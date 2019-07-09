exports.root = (req, res) => {
  res.status(200).send("root"); //回應HTTP StatusCode 「200」，HTTP body的文字為「root」
};

exports.index = (req, res) => {
  res.render("header", {
    pageData: {
      viewName: "backstage",
      pageTitle: "使用者查詢",
      hasJS: true,
      hasCSS: true,
      JSRoute: "backstage/search",
      CssRoute: "backstage/search"
    }
  });
};
