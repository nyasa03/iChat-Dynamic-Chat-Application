const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import axios module

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    // Make sure to await the axios request
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "c279480d-5909-4826-8d6b-427cb334ebc6" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // Handle potential errors
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
