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
/* Getting all the tutors */
export const getAllTutors = async ({
  limit = 10,
  page = 1,
  subject,
  topic,
}: GetAllTutors) => {
  const supabase = createSupabaseClient();
  let query = supabase.from("Tutors").select();
  if (subject && topic) {
    query = query
      .ilike("subject", `%${subject}%`)
      .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  } else if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  }
  query = query.range((page - 1) * limit, page * limit - 1);
  const { data: tutors, error } = await query;
  if (error) throw new Error(error.message);
  return tutors;
};
/* Getting a tutor */
export const getTutor = async (id: string) => {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase.from("Tutors").select().eq("id", id);
  if (error) return console.log(error);
  return data[0];
};
/* Add the lesson to history */
export const addToSessionHistory = async (tutorId: string) => {
  const { userId } = await auth();
  const supabase = createSupabaseClient();
  const { data, error } = await supabase.from("session_history").insert({
    tutor_id: tutorId,
    user_id: userId,
  });
  if (error) throw new Error(error.message);
  return data;
};
/* Get the recent lessons */
export const getRecentSessions = async (limit = 10) => {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("session_history")
    .select(`tutors:tutor_id (*)`)
    .order("created_at", { ascending: false })
    .limit(limit);
  /* Error condition */
  if (error) throw new Error(error.message);
  /* Return the latest 10 tutors */
  return data.map(({ tutors }) => tutors);
};
/* Get User lessons */
export const getUserSessions = async (userId: string, limit = 10) => {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("session_history")
    .select(`tutors:tutor_id (*)`)
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);
  /* Error condition */
  if (error) throw new Error(error.message);
  /* Return the latest 10 tutors */
  return data.map(({ tutors }) => tutors);
};
