import ApplicationCard from "./ApplicationCard";

export default function ApplicationList({ applications }) {
    if (applications.length === 0) return <p className="empty">No applications!... yet.</p>;

    return (
        <ul className="job-list">
            {applications.map((application) => (
                <ApplicationCard key={application.id} application={application}/>
            ))}
        </ul>
    );
}