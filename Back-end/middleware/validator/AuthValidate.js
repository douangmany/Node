const { check, validationResult } = require("express-validator");

exports.validateLogin = [
  check("username")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນຊື່")
    .not()
    .isNumeric()
    .withMessage("ຊື່ຜູ້ໃຊ້ຕ້ອງເປັນຕົວອັກສອນເທົ່ານັ້ນ")
    .isLength({ min: 3, max: 30 })
    .withMessage("ຊື່ຕ້ອງມີປະກອບດ້ວຍຕົວອັກສອນ 3 ຫາ 20"),

  check("password")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນ ລະຫັດຜ່ານ")
    .isLength({ min: 8, max: 30 })
    .withMessage("ລະຫັດຜ່ານຕ້ອງປະກອບດ້ວຍຕົວອັກສອນ 8 ຕົວອັກສອນຂຶ້ນໄປ"),
];

exports.validateRegister = [
  check("username")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນຊື່")
    .not()
    .isNumeric()
    .withMessage("ຊື່ຜູ້ໃຊ້ຕ້ອງເປັນຕົວອັກສອນເທົ່ານັ້ນ")
    .isLength({ min: 3, max: 30 })
    .withMessage("ຊື່ຕ້ອງມີປະກອບດ້ວຍຕົວອັກສອນ 3 ຫາ 20"),

  check("password")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນ ລະຫັດຜ່ານ")
    .isLength({ min: 8, max: 30 })
    .withMessage("ລະຫັດຜ່ານຕ້ອງປະກອບດ້ວຍຕົວອັກສອນ 8 ຕົວອັກສອນຂຶ້ນໄປ"),

  check("Confirm_password")
    .trim()
    .custom((value,{req})=>{
      if(value!=req.body.password){
        throw new Error("ລະຫັດຜ່ານບໍ່ກົງກັນ")
      }
     // throw new Error("Passwords do not match");
      return true;
    })

];

//==============================================


exports.userValidate = (req, res, next) => {
  const result = validationResult(req).array();
  if (result.length > 0) {
    const error = result[0].msg;
    res.status(400).json({ success: false, msg: error });
  } else {
    return next();
  }
};
