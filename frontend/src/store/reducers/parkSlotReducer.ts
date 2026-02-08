import { FETCH_PARKING_LOCATIONS_FAILURE, FETCH_PARKING_LOCATIONS_REQUEST, FETCH_PARKING_LOCATIONS_SUCCESS } from "../actionTypes/parkSlotActionTypes";

const initialState = {
  parkingLocations: [],
  loading: false,
  error: null,
};

const parkingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PARKING_LOCATIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PARKING_LOCATIONS_SUCCESS:
      return { ...state, loading: false, parkingLocations: action.payload };
    case FETCH_PARKING_LOCATIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default parkingReducer;
