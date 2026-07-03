import {createAsyncThunk} from "@reduxjs/toolkit";
import {GET_SERVICES} from "../../Services/api/utilis";
import {fetchJson} from "../../Services/api/fetchJson";

export const getService = createAsyncThunk("services/get", async () => {
    try {
        return await fetchJson(GET_SERVICES);
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
});
