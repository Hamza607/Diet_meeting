import React, { useState } from "react";
import { DashboardLayout } from "@layouts";
import { LiveMeetingViewerScreen } from "@modules";

const LiveMeetingViewerContainer: React.FC = () => {
  const [streamBegin, setStreamBegin] = useState(false);
  const [startToBegin, setStartToBegin] = useState(false);
  const [showChat, setShowChat] = useState(true);
  return (
    <DashboardLayout>
      <LiveMeetingViewerScreen
        streamBegin={streamBegin}
        setStreamBegin={setStreamBegin}
        startToBegin={startToBegin}
        setStartToBegin={setStartToBegin}
        showChat={showChat}
        setShowChat={setShowChat}
      />
    </DashboardLayout>
  );
};

export default LiveMeetingViewerContainer;
