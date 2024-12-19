import { states } from "../states/gloablStates";
import { schools } from "../states/school";
import { fetch } from "./fetch";

export const getData = () => {
  states.toggleGetDataLoading(true);
  return fetch({
    method: "get",
    url: "/apim/dataquery/api/?id=edb_rcd_1629267205213_58940&layer=asfps&bbox-crs=HK80&bbox=800000,800000,890000,890000&limit=10&offset=0",
  }).then((item) => {
    schools.updateList(item.data.features);
    states.toggleGetDataLoading(false);
  });
};
