import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboard(results);
        console.log('Leaderboard API endpoint:', apiUrl);
        console.log('Fetched leaderboard:', results);
      });
  }, [apiUrl]);

  return (
    <div className="container">
      <h2 className="mt-4 mb-4 text-success">Leaderboard</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((l, i) => (
                <tr key={i}>
                  <td>{l.team}</td>
                  <td>{l.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
