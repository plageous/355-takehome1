import { STATUSES, STATUS_LABELS, statusCount } from "../statuses";

export default function ApplicationTracker({ applications }) {
    const statusCounts = statusCount(applications);

    return (
        <section className="summary">
            <div className="summary-tile">
                <div className="count">{applications.length}</div>
                <div className="label">Total</div>
            </div>
            {STATUSES.map((status) => (
                <div className="summary-tile" key={status}>
                    <div className="count">{statusCounts[status]}</div>
                    <div className="label">{STATUS_LABELS[status]}</div>
                </div>
            ))}
        </section>
    ); 
}