import { Box, IconButton, Input, Typography } from "@mui/material";
import type { MenuProps } from "antd";
import { useAppContext } from "@context";
import { ICON } from "@constants";
import { UserComment } from "@components";

export const HOME_FAQ_ITEMS = (
  panelStyle: (key: string) => React.CSSProperties
) => [
  {
    key: "1",
    label: (
      <Typography
        variant="h3"
        className="lg:text-[32px] sm:text-[24px] text-base"
      >
        What is DietMeetings.com?
      </Typography>
    ),
    children: (
      <Typography className="sm:mt-4 mt-2">
        DietMeetings.com is a community-driven platform where users can join or
        host live meetings, track their health progress, and connect with others
        on their wellness journeys.
      </Typography>
    ),
    style: panelStyle("1"),
  },
  {
    key: "2",
    label: (
      <Typography
        variant="h3"
        className="lg:text-[32px] sm:text-[24px] text-base"
      >
        Who can join DietMeetings.com?
      </Typography>
    ),
    children: (
      <Typography className="sm:mt-4 mt-2">
        Anyone looking to improve their health, share their experience, or
        support others is welcome to join.
      </Typography>
    ),
    style: panelStyle("2"),
  },
  {
    key: "3",
    label: (
      <Typography
        variant="h3"
        className="lg:text-[32px] sm:text-[24px] text-base"
      >
        Is DietMeetings.com free to use?
      </Typography>
    ),
    children: (
      <Typography className="sm:mt-4 mt-2">
        We offer a free trial for new users. After that, subscription plans are
        available for continued access to premium content and features.
      </Typography>
    ),
    style: panelStyle("3"),
  },
  {
    key: "4",
    label: (
      <Typography
        variant="h3"
        className="lg:text-[32px] sm:text-[24px] text-base"
      >
        Can I access DietMeetings.com on my phone?
      </Typography>
    ),
    children: (
      <Typography className="sm:mt-4 mt-2">
        Currently, DietMeetings.com is designed as a desktop web app for an
        optimal experience.
      </Typography>
    ),
    style: panelStyle("4"),
  },
];

export const FAQ_GENERAL_ITEMS = (
  panelStyle: ({
    key,
    activeKey,
  }: {
    key: string;
    activeKey: string | string[];
  }) => React.CSSProperties
) => {
  const { generalActiveKey } = useAppContext();
  return [
    {
      key: "1",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          What is DietMeetings.com?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          DietMeetings.com is a community-driven platform where users can join
          or host live meetings, track their health progress, and connect with
          others on their wellness journeys.
        </Typography>
      ),
      style: panelStyle({ key: "1", activeKey: generalActiveKey }),
    },
    {
      key: "2",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          Who can join DietMeetings.com?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          Anyone looking to improve their health, share their experience, or
          support others is welcome to join.
        </Typography>
      ),
      style: panelStyle({ key: "2", activeKey: generalActiveKey }),
    },
    {
      key: "3",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          Is DietMeetings.com free to use?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          We offer a free trial for new users. After that, subscription plans
          are available for continued access to premium content and features.
        </Typography>
      ),
      style: panelStyle({ key: "3", activeKey: generalActiveKey }),
    },
    {
      key: "4",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          Can I access DietMeetings.com on my phone?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          Currently, DietMeetings.com is designed as a desktop web app for an
          optimal experience.
        </Typography>
      ),
      style: panelStyle({ key: "4", activeKey: generalActiveKey }),
    },
  ];
};

export const FAQ_MEETINGS_ITEMS = (
  panelStyle: ({
    key,
    activeKey,
  }: {
    key: string;
    activeKey: string | string[];
  }) => React.CSSProperties
) => {
  const { meetingsActiveKey } = useAppContext();
  return [
    {
      key: "1",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          How do I join a live meeting?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          Simply log in to your account, browse upcoming sessions, and click
          “Join” to participate in a live meeting.
        </Typography>
      ),
      style: panelStyle({ key: "1", activeKey: meetingsActiveKey }),
    },
    {
      key: "2",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          Can I host my own meeting?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          Yes! All users have the option to create and host live meetings to
          share their knowledge, experiences, or lead discussions.
        </Typography>
      ),
      style: panelStyle({ key: "2", activeKey: meetingsActiveKey }),
    },
    {
      key: "3",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          Are live meetings recorded?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          Hosts can choose to record their sessions. Recorded content will be
          available for users to watch on-demand.
        </Typography>
      ),
      style: panelStyle({ key: "3", activeKey: meetingsActiveKey }),
    },
  ];
};

export const FAQ_PROFILE_ITEMS = (
  panelStyle: ({
    key,
    activeKey,
  }: {
    key: string;
    activeKey: string | string[];
  }) => React.CSSProperties
) => {
  const { profileActiveKey } = useAppContext();
  return [
    {
      key: "1",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          How do I create my profile?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          After signing up, you’ll be guided through a simple process to set up
          your profile. Customize it to reflect your goals and interests.
        </Typography>
      ),
      style: panelStyle({ key: "1", activeKey: profileActiveKey }),
    },
    {
      key: "2",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          How can I track my progress?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          You can log your goals, record progress updates, and view your
          progress through easy-to-understand visual reports.
        </Typography>
      ),
      style: panelStyle({ key: "2", activeKey: profileActiveKey }),
    },
    {
      key: "3",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          Can I edit my goals later?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          Yes, you can adjust your goals and update your progress at any time
          from your profile dashboard.
        </Typography>
      ),
      style: panelStyle({ key: "3", activeKey: profileActiveKey }),
    },
  ];
};

export const FAQ_COMMUNITY_ITEMS = (
  panelStyle: ({
    key,
    activeKey,
  }: {
    key: string;
    activeKey: string | string[];
  }) => React.CSSProperties
) => {
  const { communityActiveKey } = useAppContext();
  return [
    {
      key: "1",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          How can I connect with other users?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          You can subscribe to your favorite creators, join discussions, and
          participate in live meetings to engage with the community.
        </Typography>
      ),
      style: panelStyle({ key: "1", activeKey: communityActiveKey }),
    },
    {
      key: "2",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          Can I message other users directly?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          Yes, DietMeetings.com has an in-app messaging feature that allows
          direct conversations with other members.
        </Typography>
      ),
      style: panelStyle({ key: "2", activeKey: communityActiveKey }),
    },
    {
      key: "3",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          How do I report inappropriate content or behavior?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          You can report any inappropriate content using the “Report” button on
          the platform. Our team will review and take appropriate action.
        </Typography>
      ),
      style: panelStyle({ key: "3", activeKey: communityActiveKey }),
    },
  ];
};

export const FAQ_SUBSCRIPTION_ITEMS = (
  panelStyle: ({
    key,
    activeKey,
  }: {
    key: string;
    activeKey: string | string[];
  }) => React.CSSProperties
) => {
  const { subscriptionActiveKey } = useAppContext();
  return [
    {
      key: "1",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          What happens after my free trial ends?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          You’ll have the option to choose from one of our subscription plans to
          continue accessing premium features.
        </Typography>
      ),
      style: panelStyle({ key: "1", activeKey: subscriptionActiveKey }),
    },
    {
      key: "2",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          How do I cancel my subscription?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          You can manage or cancel your subscription anytime through your
          account settings.
        </Typography>
      ),
      style: panelStyle({ key: "2", activeKey: subscriptionActiveKey }),
    },
    {
      key: "3",
      label: (
        <Typography
          variant="h3"
          className="lg:text-[32px] sm:text-[24px] text-base"
        >
          Will I receive a refund if I cancel my subscription?
        </Typography>
      ),
      children: (
        <Typography className="sm:mt-4 mt-2">
          Refunds may be issued based on our refund policy. Please refer to our
          Terms of Service for more details.
        </Typography>
      ),
      style: panelStyle({ key: "3", activeKey: subscriptionActiveKey }),
    },
  ];
};
export const HEIGHT__UNITS: MenuProps["items"] = [
  {
    label: <Typography className="text-sm">ft</Typography>,
    key: "ft",
  },
  {
    label: <Typography className="text-sm">cm</Typography>,
    key: "cm",
  },
];
export const WEIGHT__UNITS: MenuProps["items"] = [
  {
    label: <Typography className="text-sm">lb</Typography>,
    key: "lb",
  },
  {
    label: <Typography className="text-sm">kg</Typography>,
    key: "kg",
  },
];
export const REVIEW_CARD_ITEMS: MenuProps["items"] = [
  {
    label: (
      <Box className="flex items-center gap-3">
        <Box component="img" src={ICON.PROFILE.DROP_EDIT_ICON} />
        <Typography className="text-xs">Edit</Typography>
      </Box>
    ),
    key: "edit",
  },
  {
    label: (
      <Box className="flex items-center gap-3">
        <Box component="img" src={ICON.PROFILE.DROP_DELETE_ICON} />
        <Typography className="text-xs">Delete</Typography>
      </Box>
    ),
    key: "delete",
  },
];
export const COMMENT_REPLIES_ITEMS = ({
  style,
  replies,
  reply,
  handleOptionsClick,
}: {
  style: () => React.CSSProperties;
  replies: {
    id: string;
    avatar: string;
    username: string;
    time: string;
    comment: string;
  }[];
  reply: boolean;
  handleOptionsClick: (e: any) => void;
}) => [
  {
    key: "1",
    label: (
      <Typography className="text-xs">{replies.length} Replies</Typography>
    ),
    style: style(),
    children: [
      reply ? (
        <Box className="flex items-center gap-5 mb-4">
          <Input
            placeholder="Add a comment"
            className="w-full max-w-[560px] h-[44px] before:!hidden after:!hidden !bg-white-strong !border-[1px] !border-solid !border-secondary-light !rounded-[4px] px-[1rem]"
            inputProps={{
              className:
                "!border-none text-sm font-inter-medium font-medium text-secondary-main",
            }}
          />
          <IconButton className="w-[42px] h-[42px] rounded-full !bg-secondary-light flex justify-center items-center p-0">
            <Box component="img" src={ICON.DASHBOARD.SEND_ICON} alt="" />
          </IconButton>
        </Box>
      ) : null,
      ...replies.map((item, index) => {
        const { id, avatar, username, time, comment } = item;
        return (
          <UserComment
            key={index}
            id={id}
            avatar={avatar}
            username={username}
            time={time}
            comment={comment}
            handleOptionsClick={handleOptionsClick}
          />
        );
      }),
    ],
  },
];

export const GENDER_OPTIONS = [
  { value: "male", label: <Typography className="text-sm">Male</Typography> },
  {
    value: "female",
    label: <Typography className="text-sm">Female</Typography>,
  },
];

export const AGE_OPTIONS = [
  { value: "18-24", label: <Typography className="text-sm">18-24</Typography> },
  { value: "25-34", label: <Typography className="text-sm">25-34</Typography> },
  { value: "35-44", label: <Typography className="text-sm">35-44</Typography> },
  { value: "45-54", label: <Typography className="text-sm">45-54</Typography> },
  { value: "55-64", label: <Typography className="text-sm">55-64</Typography> },
  { value: "65-75", label: <Typography className="text-sm">65-75</Typography> },
  { value: "75+", label: <Typography className="text-sm">75+</Typography> },
];

export const REPORT_OPTIONS = [
  {
    value: "Inappropriate Content",
    label: <Typography className="text-sm">Inappropriate Content</Typography>,
  },
  {
    value: "Abusive Behavior",
    label: <Typography className="text-sm">Abusive Behavior</Typography>,
  },
  {
    value: "Inaccurate Information",
    label: <Typography className="text-sm">Inaccurate Information</Typography>,
  },
  { value: "Other", label: <Typography className="text-sm">Other</Typography> },
];
