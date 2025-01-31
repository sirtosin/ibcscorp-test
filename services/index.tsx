import axios from "axios";
import { Toast } from "../components/Toast";

export const getApi = async (url: string) => {
  const options = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    return await axios
      .get(process.env.NEXT_PUBLIC_API_URL + url, options)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (err.response.status === 401) {
          window.location.replace("/");
          localStorage.clear();
          Toast({ title: "Session Timeout", error: true });
        }
        return err;
      });
  } catch (err: any) {
    console.log("err", err);
    return err.response;
  }
};

export const postApi = async (url: string, payload: any) => {
  const options = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await axios
    .post(process.env.NEXT_PUBLIC_API_URL + url, payload, options)
    .then((res) => res.data)
    .catch((err) => {
      console.log("error msg: ", err);
      return err;
    });
  return response;
};
export const patchApi = async (url: string, payload?: any) => {
  const options = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await axios
    .patch(process.env.NEXT_PUBLIC_API_URL + url, payload, options)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        console.log("err");
      }
    })
    .catch((err) => {
      console.log("error msg: ", err);
      return err;
    });
  return response;
};

export const deleteApi = async (url: string) => {
  const options = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await axios
    .delete(process.env.NEXT_PUBLIC_API_URL + url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        console.log("err");
      }
    })
    .catch((err) => {
      console.log("error msg: ", err);
      return err;
    });
  return response;
};
