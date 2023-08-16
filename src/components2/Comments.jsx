import React from "react";

const Comments = () => {
  return (
    <div className=" w-[400px] h-[200px] flex flex-col text-left  py-3">
      <div className="flex items-center gap-4">
        <img
          src="/images/owner.jpg"
          alt=""
          className="h-[50px] w-[50px] object-fit rounded-full mt-1"
        />
        <div className="flex flex-col text-left">
          <p className="font-semibold">Ciprian</p>
          <p className="text-sm">April 2023</p>
        </div>
      </div>
      <div className="mt-4 text-gray-600">
        <p>
          From point of booking onwards, Rachel and team were exceptionally
          approachable, helpful, friendly and well organised. The listing for
          the accommodation made us fall in
        </p>
      </div>
    </div>
  );
};

export default Comments;
