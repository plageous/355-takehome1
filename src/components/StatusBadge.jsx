import { STATUS_LABELS } from "../statuses.js"

export default function StatusBadge({ status }) {
    const whichStatus = STATUS_LABELS[status] ?? status;
    return <span className={`badge badge-${status}`}>{whichStatus}</span>;
}