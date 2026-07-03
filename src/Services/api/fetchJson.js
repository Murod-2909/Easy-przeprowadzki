// Kichik fetch o'ramasi — axios o'rnini bosadi (JSON GET/POST).
export const fetchJson = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
};
