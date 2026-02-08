import { FETCH_PARKING_LOCATIONS_REQUEST, FETCH_PARKING_LOCATIONS_SUCCESS, FETCH_PARKING_LOCATIONS_FAILURE } from "../actionTypes/parkSlotActionTypes";

export const fetchParkingLocationsRequest = () => ({
  type: FETCH_PARKING_LOCATIONS_REQUEST,
});

export const fetchParkingLocationsSuccess = (data: any[]) => ({
  type: FETCH_PARKING_LOCATIONS_SUCCESS,
  payload: data,
});

export const fetchParkingLocationsFailure = (error: string) => ({
  type: FETCH_PARKING_LOCATIONS_FAILURE,
  payload: error,
});
