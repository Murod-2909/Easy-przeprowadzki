import { createAsyncThunk } from "@reduxjs/toolkit";
import {GET_ABOUT} from "../../Services/api/utilis";
import {fetchJson} from "../../Services/api/fetchJson";

export const getAbout = createAsyncThunk("about/get", async () => {
    return fetchJson(GET_ABOUT);
});
