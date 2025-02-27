import express from 'express';
import pkg from 'jsonwebtoken';
const { verify } = pkg;
import { config } from 'dotenv';
import cors from 'cors';

config();

const app = express();
const PORT = process.env.PORT || 3000;

// Define custom interface for Request with user property
interface CustomRequest extends express.Request {
  user?: any;
}

app.use(express.json());
app.use(cors());

// JWT Middleware
const authenticateToken = (req: CustomRequest, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  verify(token, process.env.JWT_SECRET || 'your-secret-key', (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Protected route example
app.get('/api/protected', authenticateToken, (req: CustomRequest, res: express.Response) => {
  res.json({ message: 'Protected data' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 