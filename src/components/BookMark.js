import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { All } from "./All";

export const BookMark = () => {
  const [bookmarkedBakeries, setBookmarkedBakeries] = useState([]);

  // 로컬 스토리지에서 북마크된 베이커리 목록을 가져옵니다.
  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedBakeries")) || [];
    setBookmarkedBakeries(savedBookmarks);
  }, []);

  // 북마크 추가/제거 핸들러
  const toggleBookmark = (bakery) => {
    const isBookmarked = bookmarkedBakeries.some((b) => b.name === bakery.name);

    if (isBookmarked) {
      // 북마크 삭제
      const updatedBookmarks = bookmarkedBakeries.filter(
        (b) => b.name !== bakery.name
      );
      setBookmarkedBakeries(updatedBookmarks);
      localStorage.setItem(
        "bookmarkedBakeries",
        JSON.stringify(updatedBookmarks)
      );
    } else {
      // 북마크 추가
      const updatedBookmarks = [...bookmarkedBakeries, bakery];
      setBookmarkedBakeries(updatedBookmarks);
      localStorage.setItem(
        "bookmarkedBakeries",
        JSON.stringify(updatedBookmarks)
      );
    }
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faBookmark}
        style={{
          marginTop: "3px",

          width: "20px",
          height: "20px",
          marginRight: "2px",
          cursor: "pointer",
        }}
        onClick={() => toggleBookmark(bakery)}
      />
    </div>
  );
};
