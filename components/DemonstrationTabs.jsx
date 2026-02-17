"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CMSDemonstration from "./CMSDemonstration";
import HomepageDemonstration from "./HomepageDemonstration";
import BlogPostDemonstration from "./BlogPostDemonstration";

export default function DemonstrationTabs() {
  return (
    <Tabs defaultActiveKey="cmsDemonstration" id="tab" className="mb-3">
      <Tab eventKey="cmsDemonstration" title="CMS (Demonstration)">
        <CMSDemonstration />
      </Tab>
      <Tab eventKey="homepageDemonstration" title="Homepage (Demonstration)">
        <HomepageDemonstration />
      </Tab>
      <Tab eventKey="blogPostDemonstration" title="Blog Post (Demonstration)">
        <BlogPostDemonstration />
      </Tab>
    </Tabs>
  );
}
