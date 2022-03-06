const db = require("../database/database");
const bodyParser = require("body-Parser");
const {check, validationResult} =require("express-validator")
const{insertUser}=require("./../models/users")

exports.loginController=(req, res) => {
  const {username, email,password} = req.body
  res.send("OK login")
}

exports.registerController= async (req, res) => {
  const data = req.body
  const result=insertUser(data)
  res.send(result)

}

// exports.registerController = async (req, res) => {
  // const { username, email, password } = req.body;
  // await db.execute(
  //     "INSERT INTO members(`username`,,`email``password`) VALUES (?,?,?)",
  //     [username, email, password],
  //     (err,result)=>{
  //         if(err){
  //             res.status(500).json({msg:err})

  //         }
  //         res.status(200).json({ msg: "ລົງທະບຽນສຳເລັດແລ້ວ" });

  //     }
  // )

//   res.send("register");
// };
// exports.loginController = async (req, res) => {
//   res.status(200).send("Login Controller");
// };
