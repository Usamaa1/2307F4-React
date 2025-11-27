// getting-started.js
import { connect } from 'mongoose';
import 'dotenv/config'

main().catch(err => console.log(err));

export async function main() {
  await connect(process.env.MONGO_URI);
  console.log("Mongoose Connected")
}




