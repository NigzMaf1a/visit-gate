import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';

function MostVisitedUnitsCard({ weeks }) {
  const [selectedWeek, setSelectedWeek] = useState(weeks[0] || 'This Week');
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch data when the component mounts or selectedWeek changes
  useEffect(() => {
    fetchVisits(selectedWeek);
  }, [selectedWeek]);

  const fetchVisits = async (week) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`/api/visits?week=${encodeURIComponent(week)}`);
      setVisits(response.data);
    } catch (err) {
      setError('Failed to load visit data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleWeekChange = (e) => {
    setSelectedWeek(e.target.value);
  };

  const topThree = visits.slice(0, 3);

  return (
    <div className="visit-card bg-white p-3 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-start m-0 fs-5">Most Visited Units</h2>
        <select
          className="form-select form-select-sm w-auto"
          onChange={handleWeekChange}
          value={selectedWeek}
        >
          {weeks.map((week, idx) => (
            <option key={idx} value={week}>
              {week}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center text-muted">Loading...</div>
      ) : error ? (
        <div className="text-danger text-center">{error}</div>
      ) : (
        <div className="table-container table-responsive">
          <table className="table table-sm table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th>Unit</th>
                <th>Resident</th>
                <th>Visits</th>
                <th>Last Visit</th>
                <th>Frequent Visitor</th>
              </tr>
            </thead>
            <tbody>
              {topThree.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.unitName}</td>
                  <td>{entry.residentName}</td>
                  <td>{entry.visitCount}</td>
                  <td>{entry.lastVisit}</td>
                  <td>{formatVisitorName(entry.frequentVisitor)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Helper to shorten long visitor names
function formatVisitorName(name) {
  if (name.length > 15) {
    const [first, ...rest] = name.split(' ');
    const last = rest.pop() || '';
    return `${first} ${last.charAt(0)}.`;
  }
  return name;
}

MostVisitedUnitsCard.propTypes = {
  weeks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MostVisitedUnitsCard;
