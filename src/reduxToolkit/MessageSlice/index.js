import { createAsyncThunk } from "@reduxjs/toolkit";
import { MESSAGE_SEND } from "../../Services/api/utilis";
import { toast } from "react-toastify";

export const sendMessage = createAsyncThunk("message/post", async (sendDataMessage, { rejectWithValue }) => {
    try {
        const formData = new URLSearchParams();
        Object.keys(sendDataMessage).forEach((key) => {
            formData.append(key, sendDataMessage[key]);
        });

        const response = await fetch(MESSAGE_SEND, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded", // 🟢 MUHIM!
            },
            body: formData.toString(),
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        toast.success("Twoja wiadomość została wysłana pomyślnie!", {
            position: "top-right",
        });
        return response.json().catch(() => ({}));
    } catch (error) {
        toast.error("Błąd podczas wysyłania wiadomości!", {
            position: "top-right",
        });
        return rejectWithValue(error.message);
    }
});
