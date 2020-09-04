import { Schema, model, Document } from "mongoose";

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});
interface IPost extends Document {
  body: String;
  username: String;
  createdAt: String;
  comments: [
    {
      body: String;
      username: String;
      createdAt: String;
    }
  ];
  likes: [
    {
      username: String;
      createdAt: String;
    }
  ];
  user: {
    type: Schema.Types.ObjectId;
    ref: "users";
  };
}

export default model<IPost>("Post", postSchema);
