import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");

        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }),
  pitch: z.string().min(10),
});

//   link dans ton schéma formSchema est plus complexe que les autres
// champs pour une bonne raison : elle effectue une validation asynchrone pour
// s'assurer que l'URL fournie pointe bien vers une image. Cette validation va
// au-delà d'une simple vérification de format (comme z.string().url()) et inclut
// une vérification active du contenu de l'URL.
