import { MongoClient } from 'mongodb';

// Connection URL
const url = process.env.DATABASE_URL;
const dbName = process.env.DATABASE_NAME;

const connect = async () => {
	const client = new MongoClient(url);
	// Use connect method to connect to the server
	await client.connect();
	return (collection) => client.db(dbName).collection(collection);
};

export default connect();
