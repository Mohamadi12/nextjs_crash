import { defineField, defineType } from "sanity";

export const startup = defineType({
  name: "startup", //Le nom technique du type. Utilisé pour identifier ce type dans le code et les requêtes
  title: "Startup", //Le titre visible dans l’interface utilisateur de Sanity Studio
  type: "document", // Indique que c’est un document principal dans Sanity, pouvant contenir plusieurs champs.
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug", //Champ générant un identifiant URL unique basé sur un autre champ.
      type: "slug",
      options: {
        source: "title", //Le slug est automatiquement généré à partir du champ title (par exemple, "Super Startup" → super-startup).
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" }, //Indique que ce champ référence un auteur déjà existant dans la base de données.
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("Please enter a category"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pitch",
      type: "markdown", //plugin a installer => npm i sanity-plugin-markdown --legacy-peer-deps et ajouter dans sanity.config puis dans layout
    }),
  ],
});
