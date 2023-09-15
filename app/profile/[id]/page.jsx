"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  const router = useRouter();
  const searchparams = useSearchParams();
  const uname = searchparams.get("name");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (params?.id) fetchPost();
  }, [params?.id]);

  return (
    <Profile
      name={`${uname}'s`}
      desc={`Welcome to ${uname}'s Profile, Ckech out what books ${uname} reads!! Suggest & get Suggested!!`}
      data={posts}
    />
  );
};

export default UserProfile;
