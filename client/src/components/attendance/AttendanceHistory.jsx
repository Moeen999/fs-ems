import { getDayTypeDisplay, getWorkingHoursDisplay } from "../../assets/assets";
import { format } from "date-fns";

const AttendanceHistory = ({ history }) => {
  return (
    <div className="card overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-900">Recent Activity</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table-modern">
          <thead>
            <tr>
              <th className="px-6 py-6">Date</th>
              <th className="px-6 py-6">Check In</th>
              <th className="px-6 py-6">Check Out</th>
              <th className="px-6 py-6">Working Hours</th>
              <th className="px-6 py-6">Day Type</th>
              <th className="px-6 py-6">Status</th>
            </tr>
          </thead>

          <tbody>
            {history.length === 0 ? (
              <tr>
                <td className="text-center py-12 text-slate-400" colSpan={6}>
                  No records found
                </td>
              </tr>
            ) : (
              history.map((rec) => {
                const dayType = getDayTypeDisplay(rec);
                return (
                  <tr key={rec?._id || rec?.id}>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {format(new Date(rec.date), "MMM dd, yyyy")}
                    </td>

                    <td className="px-6 py-4 font-medium text-slate-600">
                      {rec.checkIn
                        ? format(new Date(rec.checkIn), "hh:mm a")
                        : "-"}
                    </td>

                    <td className="px-6 py-4 font-medium text-slate-600">
                      {rec.checkOut
                        ? format(new Date(rec.checkOut), "hh:mm a")
                        : "-"}
                    </td>

                    <td className="px-6 py-4 font-medium text-slate-600">
                      {getWorkingHoursDisplay(rec)}
                    </td>

                    <td className="px-6 py-4">
                      {dayType.label !== "-" ? (
                        <span className={`badge ${dayType.className}`}>
                          {dayType.label}
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`badge ${rec.status === "PRESENT" ? "badge-success" : rec.status === "LATE" ? "badeg-warning" : "badge-danger"}`}
                      >
                        {rec.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceHistory;
