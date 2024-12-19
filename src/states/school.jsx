import { types } from "mobx-state-tree";

/** Facility Model */
const facility = types.model({
  en: types.string, // Facility name in English
  zh: types.string, // Facility name in Chinese
});

/** School List Model */
const schoolList = types.model({
  lastUpdate: types.string, // Last updated date
  facilityName: types.string, // Facility name
  address: types.string, // Facility address
  dataset: types.string, // Dataset or category
});

/** Schools Store */
export const schools = types
  .model({
    list: types.array(schoolList), // Array of school records
    currentListLength: types.number, // Number of visible records
    searchTarget: types.string, // Search filter
  })
  .actions((self) => ({
    /**
     * Updates the school list with new data.
     * Converts incoming data to match the `schoolList` model structure.
     * @param {Array} data - Array of incoming school data.
     */
    updateList(data) {
      self.list = data.map((item) => ({
        lastUpdate:
          item.properties["Last_Updated_Date___最後更新日期"].split("T")[0],
        facilityName: item.properties.Facility_Name,
        address: item.properties.Address,
        dataset: item.properties.Dataset,
      }));

      self.currentListLength = 4; // Reset visible list length
    },

    /**
     * Increases the visible list length by 4.
     */
    setCurrentListLength() {
      self.currentListLength += 4;
    },

    /**
     * Sets the search target and resets the visible list length.
     * @param {string} val - The search term.
     */
    setSearchTarget(val) {
      self.searchTarget = val;
      self.currentListLength = 4; // Reset visible list length
    },
  }))
  .views((self) => ({
    /**
     * Filters the school list based on the search target.
     * @returns {Array} Filtered list of schools.
     */
    getFilteredList() {
      if (!self.searchTarget) return self.list;
      return self.list.filter((rec) =>
        rec.address.toLowerCase().includes(self.searchTarget.toLowerCase())
      );
    },

    /**
     * Returns a sliced list based on the current visible length.
     * @returns {Array} Visible portion of the school list.
     */
    getList() {
      return this.getFilteredList().slice(0, self.currentListLength);
    },

    /**
     * Returns the length of the filtered list.
     * @returns {number} Number of matching records.
     */
    searchedListLength() {
      return this.getFilteredList().length;
    },
  }))
  .create({
    list: [], // Initialize with an empty list
    currentListLength: 4, // Default visible list length
    searchTarget: "", // Default search target is empty
  });
