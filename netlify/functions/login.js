import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
const JWT_SECRET = process.env.JWT_SECRET;

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method not allowed' }) };
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const { email, password } = payload;

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD_HASH || !JWT_SECRET) {
      return { statusCode: 500, body: JSON.stringify({ message: 'Authentication configuration is incomplete' }) };
    }

    if (email !== ADMIN_EMAIL) {
      return { statusCode: 401, body: JSON.stringify({ message: 'Invalid credentials' }) };
    }

    const passwordValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

    if (!passwordValid) {
      return { statusCode: 401, body: JSON.stringify({ message: 'Invalid credentials' }) };
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '8h' });

    return {
      statusCode: 200,
      body: JSON.stringify({ token }),
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ message: 'Login failed' }) };
  }
};
