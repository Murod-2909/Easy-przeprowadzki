import { createAsyncThunk } from "@reduxjs/toolkit";
import {GET_FEEDBACK} from "../../Services/api/utilis";
import {fetchJson} from "../../Services/api/fetchJson";

export const getFeedBack = createAsyncThunk("feedBack/get", async () => {
    return fetchJson(GET_FEEDBACK);
});
