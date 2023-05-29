import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl as string, supabaseKey as string);

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: body.email,
    password: body.password,
  });

  return NextResponse.json(data);
}

//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: "tim.coleman@hyperreal.io",
//     password: "123456",
//   });

//   return NextResponse.json({ data });
// }

// export async function POST() {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   const { email, password } = req.body;

//   console.log("email: ", email);
//   console.log("password: ", password);

//     try {
//       const { data, error } = await supabase.auth.signIn({
//         email,
//         password,
//       });

//       if (error) {
//         throw new Error(error.message);
//       }

//       res.status(200).json({ data });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
// }
