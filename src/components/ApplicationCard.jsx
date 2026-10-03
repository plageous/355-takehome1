import { formatDate } from "../statuses/jsx";
import { statusBadge } from "./StatusBadge.jsx";

export default function ApplicationCard( { application } ) {
    
    const { id, company, role, status, appliedOn, source, url, notes } = application;
    const cleanDate = formatDate(appliedOn);
    const renderNote = note && <p className="note">{note}</p>;

    return (
        <li className="job-card">
            <div className="grow">
                <h3>{role}</h3>
                <div className="company">{company}</div>
                <div className="meta">Applied {cleanDate}</div>
                {renderNote}
            </div>
        </li>
    );
}