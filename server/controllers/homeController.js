
//controller for home page
exports.getHomePage = async (req, res)=>{
  const locals = {
    title: "Fiscora Consulting Services Limited"
  }
  res.render("pages/home", locals)
}