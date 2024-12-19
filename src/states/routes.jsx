import { types } from "mobx-state-tree";

/** Routes Store */
export const routes = types
  .model({
    currentPage: types.string, // The current active page route
  })
  .actions((self) => ({
    setCurrentPage(page) {
      self.currentPage = page;
    },
  }))
  .create({
    currentPage: "/", // Default route
  });
