function Dashboard() {
  return (
    <div className="dashboard">
      <h1>AI Fitness Dashboard</h1>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Calories Goal</h3>
          <p>2500 kcal</p>
        </div>

        <div className="card">
          <h3>Protein Goal</h3>
          <p>180g</p>
        </div>

        <div className="card">
          <h3>Workout Status</h3>
          <p>Push Day</p>
        </div>

        <div className="card">
          <h3>AI Recommendation</h3>
          <p>Increase protein intake today.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;