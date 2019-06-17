import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <h4>Posted by the Fiji Groups</h4>
                <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;