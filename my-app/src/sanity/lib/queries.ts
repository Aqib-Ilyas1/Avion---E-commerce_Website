import { groq } from "next-sanity";


export const ALLProducts = groq`*[_type == "product"]`

// Home page products
export const FirstFourProducts = groq`*[_type == "product"][2..5]`