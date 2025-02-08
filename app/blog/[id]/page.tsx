"use client";

import { useParams } from "next/navigation";

export default function Article() {
  const { id: articleId } = useParams();
  return <div>ARTICLE{articleId}ページ</div>;
}
