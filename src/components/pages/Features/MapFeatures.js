import AIBudgeting from "./featuresData/AIBudgeting";
import AICopilot from "./featuresData/AICopilot";
import AIDeckBuilder from "./featuresData/AIDeckBuilder";
import AIScriptCoverageReporting from "./featuresData/AIScriptCoverageReporting";
import AutomaticScriptBreakdown from "./featuresData/AutomaticScriptBreakdown";
import Brainstorming from "./featuresData/BrainStorming";
import CharacterDevelopment from "./featuresData/CharacterDevelopment";
import IndustryStandardEditor from "./featuresData/IndustryStandardEditor";
import PlotHoleDetectionReporting from "./featuresData/PlotHoleDetectionReporting";
import Scheduling from "./featuresData/Scheduling";
import SmartFormatting from "./featuresData/SmartFormatting";
import Storyboard from "./featuresData/Storyboard";

const MapFeatures = [
  {
    id: "/features/pitch-deck",
    path: "/features/pitch-deck",
    path_element: <AIDeckBuilder />,
  },
  {
    id: "/features/ai-script-coverage-reporting",
    path: "/features/ai-script-coverage-reporting",
    path_element: <AIScriptCoverageReporting />,
  },
  {
    id: "/features/ai-budgeting",
    path: "/features/ai-budgeting",
    path_element: <AIBudgeting />,
  },
  {
    id: "/features/scheduling",
    path: "/features/scheduling",
    path_element: <Scheduling />,
  },
  {
    id: "/features/brainstorming",
    path: "/features/brainstorming",
    path_element: <Brainstorming />,
  },
  {
    id: "/features/storyboard",
    path: "/features/storyboard",
    path_element: <Storyboard />,
  },
  {
    id: "/features/character-development",
    path: "/features/character-development",
    path_element: <CharacterDevelopment />,
  },
  {
    id: "/features/ai-copilot",
    path: "/features/ai-copilot",
    path_element: <AICopilot />,
  },
  {
    id: "/features/smart-formatting",
    path: "/features/smart-formatting",
    path_element: <SmartFormatting />,
  },
  {
    id: "/features/automatic-script-breakdown",
    path: "/features/automatic-script-breakdown",
    path_element: <AutomaticScriptBreakdown />,
  },
  {
    id: "/features/plot-hole-detection-report",
    path: "/features/plot-hole-detection-report",
    path_element: <PlotHoleDetectionReporting />,
  },
  {
    id: "/features/the-industry-standard-editor",
    path: "/features/the-industry-standard-editor",
    path_element: <IndustryStandardEditor />,
  },
];
export default MapFeatures;
