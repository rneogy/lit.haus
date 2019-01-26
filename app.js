const express = require("express");
const app = express();
const path = require("path");

const PORT = 8080;

const views = require('./routes/views');


app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "public")));

// Socket setup
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", function(socket) {
  console.log("a user connected");
});

app.use('/', views);

http.listen(PORT, function() {
  console.log("Running lit.haus on port " + PORT + "!");
});
