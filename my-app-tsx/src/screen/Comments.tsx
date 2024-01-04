import { CircularProgress } from "@mui/material";
import { useGetCommentsQuery } from "../services/CommentsSlice";
import {useParams } from "react-router-dom";

const Comments = () => {
  const {postId} = useParams()
  const { data, isLoading, isFetching } = useGetCommentsQuery(postId|| "")

  return (
    <>
      {isLoading || isFetching ? (
        <div><CircularProgress /></div>
      ) : (
        <div className="main bg-stone-300">
          {data?.map((el: any) => (
            <div className="card card bg-clip-border rounded-r-lg shadow-2xl shadow-black animate-bounce" key={el.id}>
              <h2>{el.id}</h2>
              <h4>{el.body}</h4>
              <h4>{el.title}</h4>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
