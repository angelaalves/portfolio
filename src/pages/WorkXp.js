import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { projects } from "../Data";
import moment from "moment";
const WorkXp = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const renderProjectSelector = () => {
    return projects.map((project) => {
      if (project.id === selectedProject.id) {
        return <div className="XPSelected">{project.name}</div>;
      } else {
        return (
          <div
            className="XPNotSelected"
            onClick={() => {
              setSelectedProject(project);
            }}
          >
            {project.name}
          </div>
        );
      }
    });
  };
  const renderDetailsTitle = () => {
    var start = new Date(selectedProject.dateStart);
    var startFormatted = moment(start).format("MMM YYYY");
    var end = new Date(selectedProject.dateEnd);
    var endFormatted = moment(end).format("MMM YYYY");
    return (
      <div className="XPDetailsText">
        <div className="XPTitle">{selectedProject.name}</div>
        <div className="XPSubtitle">
          From {startFormatted} to {endFormatted}
        </div>
      </div>
    );
  };

  const renderTools = () => {
    return (
      <div className="XPDetailsText">
        <div className="XPTools">
          {selectedProject.tools.map((tool) => (
            <div className="XPSubtitle">{tool}</div>
          ))}
        </div>
      </div>
    );
  };
  const renderDescription = () => {
    return (
      <div className="XPDetails">
        {renderDetailsTitle()}
        <div className="XPDescription Text">{selectedProject.description}</div>
        {renderTools()}
      </div>
    );
  };
  const renderImage = () => {
    return (
      <img
        className="XPImg"
        src={require(`../images/${selectedProject.img}`)}
      />
    );
  };
  return (
    <PageWrapper
      title="Work Experience"
      id="work-xp"
      content={
        <div className="WorkXp">
          <div>{renderProjectSelector()}</div>
          <div>
            {renderImage()}
            {renderDescription()}
          </div>
        </div>
      }
    />
  );
};
export default WorkXp;
