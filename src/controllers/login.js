
exports.get=(req,res)=>{
  res.render("loginPage");
}


//when login is clicked the link url takes the route
// to the router and looks for the endpoint link
//the endpoint link looks for the controller to be gotten in the router
// and the router get the controller file...in the specific
//controller file the instruction on either to just render a page or to
//runs some post or get from the database using query files are executed
//and direction to the next step is added either as direct or a render content
//
