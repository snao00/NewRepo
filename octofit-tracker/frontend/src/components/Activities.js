import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities API endpoint:', apiUrl);
        console.log('Fetched activities:', results);
      });
  }, [apiUrl]);

  return (
    <div className="container">
      <h2 className="mt-4 mb-4 text-primary">Activities</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Duration (min)</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((a, i) => (
                <tr key={i}>
                  <td>{a.user}</td>
                  <td>{a.activity}</td>
                  <td>{a.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Activities;
