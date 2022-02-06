import React from "react";

const Tag = () => {
  {
    /* <IconTag
                  item={item}
                  key={item.productId}
                  id={index}
                  onClick={TagClickHandler}
                  clickedId={clickedId}
                /> */
  }

  return (
    <Tag
      key={item.productId}
      id={index}
      positionX={item.pointX * 1.6}
      positionY={item.pointY * 1.6}
      onClick={TagClickHandler}
    >
      {clickedId === index ? (
        <Icon
          id={index}
          src="//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
        />
      ) : (
        <Icon
          id={index}
          src=" //cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
        />
      )}
      {/* 📍 ⭐️⭐️⭐️ clikedId === index  */}
      {clickedId === index && <Tooltip item={item} />}
    </Tag>
  );
};

export default Tag;
