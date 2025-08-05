import { Fragment } from "react";
import { DashboardLayout } from "@layouts";
import { WatchRecordedContentScreen } from "@modules";

const WatchRecordedContentContainer = () => {
  return (
    <Fragment>
      <DashboardLayout>
        <WatchRecordedContentScreen />
      </DashboardLayout>
    </Fragment>
  );
};

export default WatchRecordedContentContainer;
