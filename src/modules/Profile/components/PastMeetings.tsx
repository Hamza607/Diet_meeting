import React, { Fragment, useState } from "react";
import { videosData } from "@constants";
import { CommonCard } from "@components";
import { Col, Row } from "antd";
import { SuggestVideoPopup } from "@feedComponents";

const PastMeetings: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <Fragment>
      <Row gutter={[0, 24]}>
        {videosData.map((video) => (
          <Col lg={8} md={12} xs={24} key={video.id}>
            <CommonCard
              thumbnail={video.thumbnail}
              duration={video.duration}
              title={video.title}
              creator={video.creator}
              postedAt={video.postedAt}
              tags={video.tags}
              showBookmark={true}
              handleClick={handleClick}
            />
          </Col>
        ))}
      </Row>
      <SuggestVideoPopup anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Fragment>
  );
};

export default PastMeetings;
