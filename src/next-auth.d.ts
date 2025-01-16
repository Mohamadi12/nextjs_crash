import "next-auth";

declare module "next-auth" {
  /**
   * Étendre l'interface `Session` pour inclure l'ID de l'utilisateur.
   */
  interface Session {
    id: string;
  }

  /**
   * Étendre l'interface `JWT` pour inclure l'ID de l'utilisateur.
   */
  interface JWT {
    id: string;
  }

  /**
   * Étendre l'interface `User` pour inclure des champs personnalisés.
   */
  interface User {
    id?: string;
    name?: string;
    email?: string;
    image?: string;
  }

   /**
   * Étendre l'interface `Profile` pour inclure des champs spécifiques à GitHub.
   */
   interface Profile {
    id?: string;
    login?: string;
    bio?: string;
  }
}