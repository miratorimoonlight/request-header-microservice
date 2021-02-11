const router = require("express").Router();

router.get("/whoami", (req, res) => {
  const language = req.header('accept-language');
  const software = req.header('User-Agent');
  const x_forwarded_for = req.header('x-forwarded-for') || "localhost"; //when testing locally there's no x-forwardedf-for attribute
  const ipaddress = x_forwarded_for.split(",")[0];
  return res.json({ipaddress, language, software});
})

module.exports = router;