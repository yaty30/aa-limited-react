import { types } from "mobx-state-tree";

const facility = types.model({
  en: types.string,
  zh: types.string,
});

const schoolList = types.model({
  lastUpdate: types.string,
  facilityName: types.string,
  address: types.string,
  dataset: types.string,
});

export const schools = types
  .model({
    list: types.array(schoolList),
    currentListLength: types.number,
  })
  .actions((self) => ({
    updateList(data) {
      data.forEach((item) => {
        const lastUpdate = item.properties["Last_Updated_Date___最後更新日期"];
        const converted = {
          lastUpdate: lastUpdate.split("T")[0],
          facilityName: item.properties.Facility_Name,
          address: item.properties.Address,
          dataset: item.properties.Dataset,
        };
        console.log(converted);
        self.list.push(converted);
      });

      self.setCurrentListLength(4);
    },
    setCurrentListLength() {
      self.currentListLength += 4;
    },
  }))
  .views((self) => ({
    getList() {
      return self.list.slice(0, self.currentListLength);
    },
  }))
  .create({
    list: [],
    currentListLength: 0,
  });
