import { useState } from "react";
import Tab from "./Tab";
import DifferentContent from "./DifferentContent";
import TabContent from "./TabContent";

const Tabbed = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>
      {activeTab <= 2 ? (
        <TabContent item={data.at(activeTab)} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
};

export default Tabbed;

// item={data.at(activeTab)} it is modern js about{data[activeTab]}
