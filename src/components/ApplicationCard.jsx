import { formatDate } from "../statuses";
import StatusBadge from "./StatusBadge";

export default function ApplicationCard( { application } ) {
    
    const { id, company, role, status, appliedOn, source, url, notes } = application;
    const cleanDate = formatDate(appliedOn);
    const renderSource = source ? ` - via ${source}` : "";
    const renderNote = notes && <p className="note">{notes}</p>;

    return (
        <li className="job-card">
            <div className="grow">
                <h3>{role}</h3>
                <div className="company">{company}</div>
                <div className="meta">Applied {cleanDate}{renderSource}</div>
                {renderNote}
            </div>
            <StatusBadge status={status}/>
        </li>
    );
}