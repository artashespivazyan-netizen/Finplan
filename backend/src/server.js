import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/signup", async (req, res) => {
  const {
    fullName,
    dob,
    gender,
    country,
    email,
    phone,
    province,
    city,
  } = req.body || {};

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !fullName ||
    !dob ||
    !country ||
    !email ||
    !phone ||
    !emailPattern.test(email)
  ) {
    return res.status(400).json({
      error: "Missing or invalid required fields.",
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO users
        (full_name, dob, gender, country, email, phone, province, city)
       VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id`,
      [
        fullName.trim(),
        dob,
        gender || null,
        country,
        email.trim().toLowerCase(),
        phone.trim(),
        province || null,
        city || null,
      ]
    );

    return res.status(201).json({ id: result.rows[0].id });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ error: "Email already exists." });
    }
    return res.status(500).json({ error: "Server error." });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://localhost:${port}`);
});
