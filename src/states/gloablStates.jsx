import { types } from "mobx-state-tree";

const languages = types.model({
  id: types.number,
  name: types.string,
});

export const language = types
  .model({
    currentLang: types.number,
    languages: types.array(languages),
  })
  .actions((self) => ({
    setCurrentLang(lang) {
      self.currentLang = lang;
    },
  }))
  .views((self) => ({
    getCurrentLanguage() {
      return self.languages[self.currentLang].name;
    },
  }))
  .create({
    currentLang: 0,
    languages: [
      {
        id: 0,
        name: "EN",
      },
      {
        id: 1,
        name: "繁",
      },
      {
        id: 2,
        name: "简",
      },
    ],
  });

export const states = types
  .model({
    responsiveMenuOpen: types.boolean,
  })
  .actions((self) => ({
    toggleResponsiveMenu() {
      self.responsiveMenuOpen = !self.responsiveMenuOpen;
    },
  }))
  .create({
    responsiveMenuOpen: false,
  });

export const searchSchool = types
  .model({
    target: types.string,
  })
  .actions((self) => ({
    setTarget(target) {
      self.target = target;
    },
  }))
  .create({
    target: "",
  });
