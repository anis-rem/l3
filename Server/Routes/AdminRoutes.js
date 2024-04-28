import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/Adminlogin', (req, res) => {
    const sql = "SELECT * FROM users WHERE Username = ? AND Password = ?";
    con.query(sql, [req.body.Username, req.body.Password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ loginStatus: false, error: "Query error" });
        }

        if (result.length > 0) {
            const uname = result[0].Username;
            const role = result[0].Role; // Adjusted the role column name
            if (role === 'admin') { // Adjusted the comparison
                const token = jwt.sign({ role: "admin", uname: uname }, "jwt_secret_key", { expiresIn: '1d' });
                res.cookie('token', token);
                return res.json({ loginStatus: true, token: token, adminSpace: true });
            } else {
                return res.json({ loginStatus: false, error: "You do not have access to the admin space" });
            }
        } else {
            return res.json({ loginStatus: false, error: "Invalid username or password" });
        }
    });
});

export { router as adminRouter };

