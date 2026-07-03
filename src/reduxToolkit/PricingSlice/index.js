import { createAsyncThunk } from "@reduxjs/toolkit";
import {GET_PRICING} from "../../Services/api/utilis";
import {fetchJson} from "../../Services/api/fetchJson";

export const getPricing = createAsyncThunk("price/get", async () => {
    return fetchJson(GET_PRICING);
});
