import { STATUSES, STATUS_LABELS, formatDate } from "../statuses";

export default function ApplicationCard( { application } ) {
    
    const { id, company, role, status, appliedOn, source, url, notes } = application;
    const cleanDate = formatDate(appliedOn);
    const renderNote = note == '' ? null : note;

    return (
        <article className="card">
            <h3 className="role">{role}</h3>
            <p className="company">{company}</p>
            <p className="meta">{cleanDate} { }</p>
            <p className="note">{renderNote}</p>
        </article>
    );
}