function Testimonials() {
  return (
    <div style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1>What Our Customers Say</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <div className="card">
          <p>"Excellent electrician service!"</p>
          <h4>- Rahul</h4>
        </div>

        <div className="card">
          <p>"Very quick and professional."</p>
          <h4>- Priya</h4>
        </div>

        <div className="card">
          <p>"Booking process was super easy."</p>
          <h4>- Aman</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;