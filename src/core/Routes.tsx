import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import { ROUTES } from "@constants";
import {
  AboutUsContainer,
  BlogDetailsContainer,
  BlogsContainer,
  ContactUsContainer,
  FAQContainer,
  ForgotPasswordContainer,
  HomeContainer,
  LoginContainer,
  NotFoundContainer,
  OnboardingContainer,
  OtpVerificationContainer,
  PolicyContainer,
  ResetPasswordContainer,
  ServicesContainer,
  SignupContainer,
  TwoFactorContainer,
  LiveMeetingContainer,
  FeedContainer,
  LiveMeetingViewerContainer,
  WatchRecordedContentContainer,
  WatchUploadedContentContainer,
  PersonalInfoContainer,
  SecurityContainer,
  NotificationsContainer,
  SubscriptionsContainer,
  TermsContainer,
  PrivacyContainer,
  ProfileContainer,
  FavoritesContainer,
  ForumContainer,
  PostDetailsContainer,
  NewPostContainer,
  ProgressContainer,
  StartLiveMeetingContainer,
  LiveStreamingContainer,
  ContentHubContainer,
  UploadContentContainer,
  MessagesContainer,
} from "@modules";

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      {/* Dashboard as home page */}
      <Route path={ROUTES.ROOT} element={<FeedContainer />} />
      
      {/* Landing routes */}
      <Route path="/home" element={<HomeContainer />} />
      <Route path={ROUTES.FAQ} element={<FAQContainer />} />
      <Route path={ROUTES.ABOUT_US} element={<AboutUsContainer />} />
      <Route path={ROUTES.BLOGS} element={<BlogsContainer />} />
      <Route path={ROUTES.BLOG_DETAILS} element={<BlogDetailsContainer />} />
      <Route path={ROUTES.PRIVACY_POLICY} element={<PolicyContainer />} />
      <Route path={ROUTES.TERMS_OF_SERVICE} element={<ServicesContainer />} />
      <Route path={ROUTES.CONTACT_US} element={<ContactUsContainer />} />

      {/* Auth routes */}
      <Route path={ROUTES.LOGIN} element={<LoginContainer />} />
      <Route path={ROUTES.SIGNUP} element={<SignupContainer />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordContainer />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordContainer />} />
      <Route path={ROUTES.ENABLE_2FA} element={<TwoFactorContainer />} />
      <Route path={ROUTES.OTP_VERIFICATION} element={<OtpVerificationContainer />} />
      
      {/* Onboarding routes */}
      <Route path={ROUTES.ONBOARDING} element={<OnboardingContainer />} />

      {/* Dashboard routes - now accessible without authentication */}
      <Route path={ROUTES.DASHBOARD} element={<FeedContainer />} />
      <Route path={ROUTES.DASHBOARD_LIVE_MEETINGS} element={<LiveMeetingContainer />} />
      <Route path={ROUTES.DASHBOARD_CONTENTHUB} element={<ContentHubContainer />} />
      <Route path={ROUTES.DASHBOARD_START_LIVE_MEETING} element={<StartLiveMeetingContainer />} />
      <Route path={ROUTES.DASHBOARD_STAR_LIVE_MEETING_LIVE} element={<LiveStreamingContainer />} />
      <Route path={ROUTES.DASHBOARD_LIVE_MEETINGS_VIEWER} element={<LiveMeetingViewerContainer />} />
      <Route path={ROUTES.DASHBOARD_RECORDED_CONTENT_VIEWER} element={<WatchRecordedContentContainer />} />
      <Route path={ROUTES.DASHBOARD_UPLOADED_CONTENT_VIEWER} element={<WatchUploadedContentContainer />} />
      <Route path={ROUTES.DASHBOARD_UPLOAD_CONTENT} element={<UploadContentContainer />} />
      <Route path={ROUTES.DASHBOARD_FAVORITES} element={<FavoritesContainer />} />
      <Route path={ROUTES.DASHBOARD_MESSAGES} element={<MessagesContainer />} />
      <Route path={ROUTES.DASHBOARD_FORUM} element={<ForumContainer />} />
      <Route path={ROUTES.DASHBOARD_FORUM_POST_DETAILS} element={<PostDetailsContainer />} />
      <Route path={ROUTES.DASHBOARD_FORUM_NEW_POST} element={<NewPostContainer />} />
      <Route path={ROUTES.DASHBOARD_PROGRESS} element={<ProgressContainer />} />
      <Route path={ROUTES.DASHBOARD_SETTINGS_PERSONAL_INFO} element={<PersonalInfoContainer />} />
      <Route path={ROUTES.DASHBOARD_SETTINGS_SECURITY} element={<SecurityContainer />} />
      <Route path={ROUTES.DASHBOARD_SETTINGS_NOTIFICATIONS} element={<NotificationsContainer />} />
      <Route path={ROUTES.DASHBOARD_SETTINGS_SUBSCRIPTION} element={<SubscriptionsContainer />} />
      <Route path={ROUTES.DASHBOARD_SETTINGS_TERMS_CONDITIONS} element={<TermsContainer />} />
      <Route path={ROUTES.DASHBOARD_SETTINGS_PRIVACY_POLICY} element={<PrivacyContainer />} />
      <Route path={ROUTES.DASHBOARD_PROFILE} element={<ProfileContainer />} />

      {/* 404 route - must be last */}
      <Route path="*" element={<NotFoundContainer />} />
    </ReactRoutes>
  );
};

export default Routes;
