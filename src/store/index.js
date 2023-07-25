import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { inData, ukData, usData } from "../geojson/in.js";
import { inInfo, ukInfo, usInfo } from "../geojson/region.js";
const initialState = {
  selectedRegion: "in",
  regionInfo: inInfo,
  nightMode: false
};

function rootReducer(state = initialState, action) {
  let region, data;
  switch (action.type) {
    case "SET_SELECTED_REGION":
      return { ...state, selectedRegion: action.payload };
    case "SET_REGION_INFO":
      region = action.payload;
      if (region === "in") {
        data = inInfo;
      } else if (region === "us") {
        data = usInfo;
      } else {
        data = ukInfo;
      }
      return { ...state, regionInfo: data };
    case "SET_NIGHT_MODE":
      return { ...state, nightMode: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
