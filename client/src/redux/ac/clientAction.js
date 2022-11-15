import { GET_CLIENT } from "../types/clienType";
import axios from "axios";

export const getClient = (roleId) => ({
  type: GET_CLIENT,
  payload: roleId
})


export const getClientFromServer = () => async(dispatch) => {
  const response = await axios("http://84.252.143.166:3032")
  dispatch(getClient(response.data))
}


