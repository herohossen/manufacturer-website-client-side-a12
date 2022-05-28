import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const Tools = () => {
  const {
    isLoading,
    error,
    data: tools,
  } = useQuery("tools", () =>
    fetch("http://localhost:8888/tools").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className=" text-center text-4xl font-bold my-5">Tools</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools?.slice(-3)?.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
