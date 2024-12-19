import { types } from "mobx-state-tree";

/** Routes Store */
export const routes = types
  .model({
    currentPage: types.number, // The current active page route
  })
  .actions((self) => ({
    setCurrentPage(page) {
      self.currentPage = page;
    },
  }))
  .create({
    currentPage: 0, // Default route
  });
