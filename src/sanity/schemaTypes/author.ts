import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author", //Identifiant unique du type de document, utilisé en interne par Sanity.
  title: "Author", //Nom affiché dans l'interface utilisateur de Sanity Studio.
  type: "document", //Spécifie qu'il s'agit d'un document (par opposition à un objet ou un tableau).
  icon: UserIcon,
  fields: [
    //Liste des champs que ce type de document contient. Chaque champ est défini avec defineField.
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "username",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "string",
    }),
    defineField({
      name: "bio",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name", //Le champ name sera affiché comme titre dans la liste des auteurs.
    },
  },
});
