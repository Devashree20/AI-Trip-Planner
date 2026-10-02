function Result() {
  const trip = localStorage.getItem("trip");

  return (
    <div>
      <h2>Your Personalized Trip Plan</h2>
      <pre>{trip}</pre>
    </div>
  );
}

export default Result;
