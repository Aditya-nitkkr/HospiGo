const HospitalList = ({ hospitals }) => {
  if (!hospitals.length) return <p>No hospitals found nearby.</p>;

  return (
    <ul className="space-y-4">
      {hospitals.map((hospital) => (
        <li key={hospital.place_id} className="p-4 rounded shadow bg-white">
          <h3 className="font-semibold">{hospital.name}</h3>
          <p>{hospital.vicinity}</p>
        </li>
      ))}
    </ul>
  );
};

export default HospitalList;
