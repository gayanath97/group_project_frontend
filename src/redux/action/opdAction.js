import {
  GET_OPDBILL_DETAILS,
  POST_OPDBILL_DETAILS,
  UPDATE_OPDBILL_DETAILS,
  DELETE_OPDBILL_DETAILS,
} from "../type";
import {
  GetOpdbillApiDetails,
  PostOpdbillApiDetails,
  UpdateOpdbillApiDetails,
  DeleteOpdbillApiDetails,
} from "../../services/OpdBillService";
const GetOpdbillApiAction = () => {
  return function (dispatach) {
    return GetOpdbillApiDetails().then((res) => {
      console.log("Response Data is _____", res.data.payload[0]);
      dispatach({
        type: GET_OPDBILL_DETAILS,
        payload: res.data.payload[0],
      });
    });
  };
};
const PostOpdbillApiAction = (request) => {
  return function (dispatach) {
    dispatach({
      type: POST_OPDBILL_DETAILS,
      payload: false,
    });
    return PostOpdbillApiDetails(request).then((res) => {
      console.log("Response Data is _____", res);
      dispatach({
        type: POST_OPDBILL_DETAILS,
        payload: true,
      });
    });
  };
};

const UpdateOpdbillApiAction = (id, request) => {
  return function (dispatach) {
    dispatach({
      type: UPDATE_OPDBILL_DETAILS,
      payload: false,
    });
    return UpdateOpdbillApiDetails(id, request).then((res) => {
      console.log("Response Data is _____", res);
      dispatach({
        type: UPDATE_OPDBILL_DETAILS,
        payload: true,
      });
    });
  };
};

const DeleteOpdbillApiAction = (id) => {
  return function (dispatach) {
    dispatach({
      type: DELETE_OPDBILL_DETAILS,
      payload: false,
    });
    return DeleteOpdbillApiDetails(id).then((res) => {
      console.log("Response Data is _____", res);
      dispatach({
        type: DELETE_OPDBILL_DETAILS,
        payload: true,
      });
    });
  };
};

export {
  GetOpdbillApiAction,
  PostOpdbillApiAction,
  UpdateOpdbillApiAction,
  DeleteOpdbillApiAction,
};
