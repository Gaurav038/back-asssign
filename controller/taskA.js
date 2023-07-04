const taskA = (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate username
    const usernameRegex = /^[a-zA-Z0-9]{6,12}$/;
    if (!username || !username.match(usernameRegex)) {
      return res.status(400).json({ error: "Invalid username" });
    }

    // Validate password
    if (!password || password.length < 6) {
      return res.status(400).json({ error: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
    
  }catch (error) {
    return res.status(400).json(error);
  }

};

module.exports = { taskA };
