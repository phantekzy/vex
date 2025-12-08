"use server";
/* Import section */
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";
/* Tutor creation */
export const createTutor = async (formData: CreateTutor) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("Tutors")
    .insert({ ...formData, author })
    .select();

  if (error || !data)
    throw new Error(error?.message || "Failed to create your Tutor");

  return data[0];
};
