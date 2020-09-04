import { Schema, model, Document } from "mongoose";

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});
interface IUser extends Document {
  username: String;
  password: String;
  email: String;
  createdAt: String;
}
export default model<IUser>("User", userSchema);
