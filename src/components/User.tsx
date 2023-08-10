"user client";
import React from "react";
import Image from "next/image";

const User = ({ user }: any) => {
  return (
    <>
      {user && (
        <div>
          <div>{user.displayName}</div>
          <div>{user.token}</div>
          {user.photoURL && (
            <Image
              src={user.photoURL}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          )}
        </div>
      )}
    </>
  );
};

export default User;
