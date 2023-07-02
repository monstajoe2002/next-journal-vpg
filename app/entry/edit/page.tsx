import React from "react";
import { Mood } from "@prisma/client";
import { redirect } from "next/navigation";

export default async function EditPage({
  searchParams: { id },
}: {
  searchParams: { id: string };
}) {
  async function editEntry(data: FormData) {
    "use server";
    const formData = {
      title: data.get("title")!.toString(),
      content: data.get("content")!.toString(),
      mood: data.get("mood")! as Mood,
    };
    await prisma.entry.update({ data: formData, where: { id } });
    redirect("/");
  }
  const entry = await prisma.entry.findUnique({ where: { id } });
  const moods = Object.values(Mood);
  return (
    <form action={editEntry}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        defaultValue={entry?.title}
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content"
        placeholder="Content"
        defaultValue={entry?.content}
      />
      <select name="mood" defaultValue={entry?.mood}>
        <option value="" disabled selected>
          Select a mood
        </option>
        {moods.map((mood, idx) => (
          <option key={idx} value={mood}>
            {mood}
          </option>
        ))}
      </select>
      <button type="submit">Update</button>
    </form>
  );
}
