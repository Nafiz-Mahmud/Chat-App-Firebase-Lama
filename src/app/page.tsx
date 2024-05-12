"use client";
import Chat from "@/components/chat";
import List from "@/components/list";
import Detail from "@/components/detail";
import Login from "@/components/Login";
export default function HomePage() {
  const user = true;
  return (
    <div className="homepage">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
