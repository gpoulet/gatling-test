import React, { FC, useEffect, useState } from "react";
import { Post } from "../../models";
import UserPost from "../UserPost";
import Loader from "../Loader";

type UserPostsProps = {
  posts: Post[];
  loadPosts: () => Promise<{ payload: Post[]; type: string }>;
};

const UserPosts: FC<UserPostsProps> = ({ posts, loadPosts }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (posts.length === 0) {
      setLoading(true);
      loadPosts().finally(() => setLoading(false));
    }
  }, [posts, loadPosts]);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        {posts.map((post) => (
          <UserPost key={post.id} post={post} />
        ))}
      </>
    );
  }
};

export default UserPosts;
