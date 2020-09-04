import "reflect-metadata";
import { Resolver, Query } from "type-graphql";
import Posts from "../db/models/Posts";
@Resolver()
export class HelloResolver {
  @Query(() => String)
  async hello() {
    const post = await Posts.findOne({});
    return post?.body;
  }
}
