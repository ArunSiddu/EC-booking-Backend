const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./busList")(app);
require("./dropDownListValues")(app);
require("./busOperations")(app);

app.listen(port, () => console.log(`EC Bus Server up on port => ${port}`));
