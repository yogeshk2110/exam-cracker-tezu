import { connectToDatabase } from './db/mongo.js';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method not allowed' }) };
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const { db } = await connectToDatabase();

    const lead = {
      ...payload,
      status: 'New',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await db.collection('students').insertOne(lead);

    return {
      statusCode: 201,
      body: JSON.stringify({ id: result.insertedId }),
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ message: 'Failed to create student lead' }) };
  }
};
