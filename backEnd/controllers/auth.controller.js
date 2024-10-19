import bcryptjs from "bcryptjs";
import User from "../Models/User.model.js";
import generateTokenandSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    // Take input from users
    const { fullName, username, password, confirmpassword, gender } = req.body;
    // const data = req.body;

    // Check confirmpassword === password or not
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Password don't match" });
    }
    // Check that What user is allready exits in database
    const user = await User.findOne({ username });

    // If user exits
    if (user) {
      return res.status(400).json({ error: "Username already exits" });
    }

    // If user is not exits
    // HASH PASSWORD HERE
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/
    // Determine the user profile (Profile picture)
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // create new user
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    // If there is new user Save user in database
    if (newUser) {
      // Generate JWT token here
      generateTokenandSetCookie(newUser._id, res);
      await newUser.save();

      // Send it as a response
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
    }
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = generateTokenandSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
    console.log(`User login successfully ${user.fullName}`);
  } catch (error) {
    console.log("Error in Login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
