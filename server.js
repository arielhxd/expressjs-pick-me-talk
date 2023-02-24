const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const logger = require("morgan");

const indexRouter = require("./routes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.set("port", 3000);
app.set("host", "localhost");

app.listen(app.get("port"), () => {
  console.log(`Server running in http://${app.get("host")}:${app.get("port")}`);
});
