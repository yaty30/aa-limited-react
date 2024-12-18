import { types } from "mobx-state-tree";

export const routes = types
  .model({
    currentPage: types.string,
  })
  .actions((self) => ({
    setCurrentPage(page) {
      self.currentPage = page;
    },
  }))
  .create({
    currentPage: "/",
  });
