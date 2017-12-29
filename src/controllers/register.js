



exports.post=(req,res)=>{
  const user_details=req.body;
  checkRegistered(user_details.email).then((queryRes) => {
    console.log(queryRes[0].case==true);
    return new Promise((resolve, reject) => {
      if (queryRes[0].case===false) {
        res.status(409);
        reject(new Error('This user already exists, please login'));
      } else {
        resolve();
        }
    })
  })
.then(()=>{
  const hash=bcrypt.hash(user_details.password);
  return hash;
 })
.then((hashedReturnAbove) => {
    return addToRegister(user_details.name,user_details.email, hashedReturnAbove);
 })
 .then(() => {
    req.session.name = user_details.name;
    req.session.Loggedin = true;
  })
 .then(() => {
  console.log("Email sent")
  console.log(req.session);
  res.render("profile")
 })
.catch((err) => {
   if (err.message === 'This user already exists, please login') {
   req.flash('error_msg', err.message);
   res.redirect('/register_tutor_page');
   } else {
   throw err
 }
})
}
