const FeedItem = ({ item }: { item: any }) => {
  return (
      <div className="feed-item border p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          {item.image && (
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-3" />
          )}
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-xs text-gray-400">Published: {item.datetime}</p>
          <p className="text-xs text-gray-400">Source: {item.source}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
              Read More
          </a>
      </div>
  );
};

export default FeedItem;
