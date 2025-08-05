import { DashboardLayout } from "@layouts";
import { LiveStreamingScreen } from "@modules";
import { useState } from "react";

const LiveStreamingContainer = () => {
  const [streamBegin, setStreamBegin] = useState(true);
  const [startToBegin, setStartToBegin] = useState(true);
  const [showChat, setShowChat] = useState(true);
  return (
    <DashboardLayout>
      <LiveStreamingScreen
        streamBegin={streamBegin}
        setStreamBegin={setStreamBegin}
        startToBegin={startToBegin}
        setStartToBegin={setStartToBegin}
        showChat={showChat}
        setShowChat={setShowChat}
      />{" "}
    </DashboardLayout>
  );
};

export default LiveStreamingContainer;
