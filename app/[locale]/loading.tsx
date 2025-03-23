import React from "react";

export default function Loading() {
  return (
    <div className="page-loader fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-t-transparent border-b-transparent border-primary rounded-full animate-spin"></div>
    </div>
  );
}
