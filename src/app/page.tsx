"use client";

import Link from "next/link";
import "./style.css";

export default function Landing() {
  return (
    <>
      <div className="bg-image"></div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: "20px",
        }}
      >
        <Link
          href={"/home"}
          style={{
            textDecoration: "none",
            fontSize: "20px",
          }}
          id="more-link"
        >
          <i>MORE...</i>
        </Link>
      </div>
    </>
  );
}
