import { connectToDatabase } from './db/mongo.js';

export const handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method not allowed' }) };
  }

  try {
    const { db } = await connectToDatabase();
    const students = await db.collection('students').find().sort({ createdAt: -1 }).limit(200).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(students),
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ message: 'Failed to load students' }) };
  }
};
