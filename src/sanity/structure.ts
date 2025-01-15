import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("author").title("Authors"), //C'est le preview qui est ici en quelque sorte le title et le name au debut
      S.documentTypeListItem("startup").title("Startups"),
    ]);
