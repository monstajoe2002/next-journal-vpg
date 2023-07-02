import React from "react";
import { Mood } from "@prisma/client";
import { redirect } from "next/navigation";

async function createEntry(data:FormData) {
    "use server"
    const formData={
        title:data.get("title")!.toString(),
        content:data.get("content")!.toString(),
        mood:data.get("mood")! as Mood,
    }
    await prisma.entry.create({data:formData})
    redirect("/")
}

export default function CreatePage() {
  const moods = Object.values(Mood);
  return (
    <form action={createEntry}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" placeholder="Title" />
      <label htmlFor="content">Content</label>
      <textarea name="content" id="content" placeholder="Content" />
      <select name="mood">
        <option value="" disabled selected>
          Select a mood
        </option>
        {moods.map((mood, idx) => (
          <option key={idx} value={mood}>
            {mood}
          </option>
        ))}
      </select>
      <button type="submit">Create</button>
    </form>
  );
}
