app.get("/", (req, res, next) => {

  // Throw and Error knowingly. Another example could be 
  // let x = null.split(",");
  throw new Error('Something Wrong');
  return res.send("Hello World");
  
});
