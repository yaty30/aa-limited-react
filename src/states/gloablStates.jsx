import { types } from "mobx-state-tree";

/** Language Model */
const Language = types.model({
  id: types.number,
  name: types.string,
});

/** Language Store */
export const language = types
  .model({
    currentLang: types.number, // Active language index
    languages: types.array(Language), // List of available languages
  })
  .actions((self) => ({
    setCurrentLang(lang) {
      self.currentLang = lang; // Set the active language by index
    },
  }))
  .views((self) => ({
    getCurrentLanguage() {
      return self.languages[self.currentLang]?.name || ""; // Get active language name
    },
  }))
  .create({
    currentLang: 0,
    languages: [
      { id: 0, name: "EN" },
      { id: 1, name: "繁" },
      { id: 2, name: "简" },
    ],
  });

/** Global States Store */
export const states = types
  .model({
    responsiveMenuOpen: types.boolean, // Responsive menu state
    getDataLoading: types.boolean, // Data loading state
  })
  .actions((self) => ({
    toggleResponsiveMenu() {
      self.responsiveMenuOpen = !self.responsiveMenuOpen; // Toggle menu state
    },
    toggleGetDataLoading(status) {
      self.getDataLoading = status; // Set loading state
    },
  }))
  .create({
    responsiveMenuOpen: false,
    getDataLoading: false,
  });

/** Search School Store */
export const searchSchool = types
  .model({
    target: types.string, // School search string
  })
  .actions((self) => ({
    setTarget(target) {
      self.target = target; // Update search target
    },
  }))
  .create({
    target: "",
  });
