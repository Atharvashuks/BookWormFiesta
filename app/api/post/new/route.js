import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const POST = async (req, res) => {
  const { name, userId, post, tag } = await req.json();

  try {
    await connectToDB();
    const newPost = new Post({
      creator: userId,
      name: name,
      post: post,
      tag: tag,
    });

    await newPost.save();

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
