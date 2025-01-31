import { useEffect, useState } from "react";

const Bookmark = () => {
  const [bookmarkedBakeries, setBookmarkedBakeries] = useState([]);

  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedBakeries")) || [];
    setBookmarkedBakeries(savedBookmarks);
  }, []);
  return (
    <div>
      <h2>북마크한 베이커리</h2>
      {bookmarkedBakeries.length === 0 ? (
        <p>북마크한 베이커리가 없습니다.</p>
      ) : (
        <ul>
          {bookmarkedBakeries.map((bakery) => (
            <li key={bakery.name}>{bakery.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookmark;
