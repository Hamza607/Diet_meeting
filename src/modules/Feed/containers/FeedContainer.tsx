import React from "react";
import { DashboardLayout } from "@layouts";
import { FeedScreen } from "@modules";

const FeedContainer: React.FC = () => {
    return (
        <DashboardLayout>
            <FeedScreen />
        </DashboardLayout>
    );
};

export default FeedContainer;
