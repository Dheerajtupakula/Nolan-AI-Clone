import PrivacyPolicy from "./footer-privacy/PrivacyPolicy";
import ReferralProgram from "./footer-privacy/ReferralProgram";
import Releases from "./footer-privacy/Releases";
import TermsofService from "./footer-privacy/TermsofService";

const MapFooter = [
  {
    id: "/privacy-policy",
    path: "/privacy-policy",
    path_element: <PrivacyPolicy />,
  },
  {
    id: "/terms-of-service",
    path: "/terms-of-service",
    path_element: <TermsofService />,
  },
  {
    id: "/referral-program",
    path: "/referral-program",
    path_element: <ReferralProgram />,
  },
  {
    id: "/releases",
    path: "/releases",
    path_element: <Releases />,
  },
];
export default MapFooter;
