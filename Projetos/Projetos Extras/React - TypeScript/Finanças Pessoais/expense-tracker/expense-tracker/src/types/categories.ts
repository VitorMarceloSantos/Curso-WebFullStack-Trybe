export type TCategories = {
  [tag: string]: { // tag: será o key do objeto
    title: string; // values dos objeto
    color: string;
    expenses: boolean
  }
}