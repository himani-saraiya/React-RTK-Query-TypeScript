import React, { useEffect } from "react";
import "./Practice.css";
import { useNavigate } from "react-router-dom";
import {
  useAddPostMutation,
  useDeletPostMutation,
  useGetPostsQuery,
  useUpdatePostMutation,
} from "../services/PostSlice";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

const Practice: React.FC = () => {
  const { data = [], isLoading, error } = useGetPostsQuery("");
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletPostMutation();
  const navigate = useNavigate();

  useEffect(() => {
    handleData();
  });

  const handleData = () => {
    if (isLoading) {
      return <p>Loading....</p>;
    } else if (error) {
      return <p>Error loading data</p>;
    } else {
      console.log(data);
    }
  };

  return (
    <div>
      <div className="main bg-slate-200 bg-cover  ">
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate("/comments");
            }}
          >
            View Comments
          </Button>
          <Button
            onClick={() => {
              addPost({
                id: 1,
                title: "abcd",
                body: "xyz",
              });
            }}
          >
            Add Post
          </Button>

          <Button
            onClick={() => {
              updatePost({
                id: 3,
                title: "xyz",
                body: "abc",
              });
            }}
          >
            Update Post
          </Button>
          <Button 
          startIcon={<Delete/>}
            onClick={() => {
              deletePost({
                id: 1,
                title: "abc",
                body: "xyz",
              });
            }}
          >
            Delete Post
          </Button>
        </div>
        {data?.map((post: any) => (
          <div
            className="card bg-clip-border rounded-r-lg shadow-2xl shadow-black animate-pulse "
            key={post.id}
          >
            <h2>{post.id}</h2>
            <br />
            <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {post.title}
            </h4>
            <br />
            <p className="subpixel-antialiased text-lime-900 ">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice;
