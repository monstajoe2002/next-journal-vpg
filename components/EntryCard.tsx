"use client"
import { Mood } from "@prisma/client";
import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  title: string;
  content: string;
  mood: Mood;
};
async function deleteEntry(id:string){
  await fetch(`/api/entry/delete?id=${id}`,{
    method:"DELETE"
  })
  window.location.reload()
}


export default function EntryCard({ id, title, content, mood }: Props) {
  return (
    <article>
      <header>
        <h2>{title}</h2>
      </header>
      <p>{content}</p>
      <footer>
        How I feel at the moment: <strong>{mood}</strong>
        <button onClick={()=>deleteEntry(id)}>Delete</button>
        <Link style={{width:'100%'}} href={`/entry/edit?id=${id}`} role="button" className="outline">Edit</Link>
      </footer>
    </article>
  );
}
