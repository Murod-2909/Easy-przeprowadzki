import { createAsyncThunk } from "@reduxjs/toolkit";
import {GET_HERO} from "../../Services/api/utilis";
import {fetchJson} from "../../Services/api/fetchJson";

export const getHero = createAsyncThunk("hero/get", async () => {
    return fetchJson(GET_HERO);
});
