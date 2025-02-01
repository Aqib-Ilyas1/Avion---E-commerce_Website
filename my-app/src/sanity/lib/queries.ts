import { groq } from "next-sanity";


export const ALLProducts = groq`*[_type == "product"]`

// Home page products
export const FirstSixProducts = groq`*[_type == "product"][0..5]`