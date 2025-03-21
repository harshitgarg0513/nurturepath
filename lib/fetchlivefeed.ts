export const fetchLiveFeed = async () => {
    try {
        console.log("Fetching general live feed...");

        const response = await fetch(`/api/feed`);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
            console.log("Live feed data received:", data.data);
            return data.data;
        } else {
            throw new Error(data.error || "Unknown error fetching live feed.");
        }
    } catch (error) {
        console.error("Error fetching live feed:", error);
        return [];
    }
};
