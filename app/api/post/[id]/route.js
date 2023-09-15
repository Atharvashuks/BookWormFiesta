import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const posts = await Post.findById(params.id).populate("creator");

    if (!posts) return new Response("Post not found", { status: 404 });

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { name, post, tag } = await req.json();

  try {
    await connectToDB();

    const existingPost = await Post.findById(params.id);
    if (!existingPost) return new Response("Post not found", { status: 404 });

    existingPost.name = name;
    existingPost.post = post;
    existingPost.tag = tag;

    await existingPost.save();
    return new Response(JSON.stringify(existingPost), { status: 200 });
  } catch (error) {
    return new Response("failed to update post", error, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Post.findByIdAndRemove(params.id);
    return new Response("post deleted", { status: 200 });
  } catch (error) {
    return new Response("failed to delete post", error, { status: 500 });
  }
};
