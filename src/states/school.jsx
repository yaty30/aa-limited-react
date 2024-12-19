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
    searchTarget: types.string,
  })
  .actions((self) => ({
    updateList(data) {
      // self.list.clear();

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

      self.currentListLength = 4;
    },
    setCurrentListLength() {
      self.currentListLength += 4;
    },
    setSearchTarget(val) {
      self.currentListLength = 4;
      self.searchTarget = val;
    },
  }))
  .views((self) => ({
    searchedListLength() {
      if (self.searchTarget !== "") {
        let list = self.list.filter((rec) =>
          rec.address.includes(self.searchTarget)
        );
        return list.length;
      }
      return 0;
    },
    getList() {
      let list;
      if (self.searchTarget !== "") {
        list = self.list.filter((rec) =>
          rec.address.toLowerCase().includes(self.searchTarget.toLowerCase())
        );
      } else {
        list = self.list;
      }
      const res = list.slice(0, self.currentListLength);
      console.log(res);
      return res;
    },
  }))
  .create({
    list: [],
    currentListLength: 4,
    searchTarget: "",
  });
