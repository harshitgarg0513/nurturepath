import { useEffect, useState } from "react";
import { fetchLiveFeed } from "@/lib/fetchlivefeed";
import FeedItem from "./FeedItem";

const LiveFeed = () => {
    const [feed, setFeed] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadFeed = async () => {
            setLoading(true);
            const data = await fetchLiveFeed();
            setFeed(data);
            setLoading(false);
        };

        loadFeed();
    }, []);

    return (
        <div className="live-feed">
            {loading ? (
                <p>Loading live feed...</p>
            ) : feed.length > 0 ? (
                feed.map((item, index) => <FeedItem key={index} item={item} />)
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};

export default LiveFeed;
