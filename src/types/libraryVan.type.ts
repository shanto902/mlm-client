export type TLibraryVan = {
  _id: string;
  libraryVanId: string;
  status: "active" | "inactive" | "in-maintenance";
  key?: string;
};
