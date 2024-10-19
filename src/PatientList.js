import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const PatientList = () => {
  const [patients, setPatients] = useState();

  useEffect(() => {
    const APICall = async () => {
      const response = await fetch('http://localhost:3000/api/patients');
      const data = await response.json();
      setPatients(data);
      console.log(data, 'In thedata');
    };
    APICall();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl text-center text-blue-900 font-semibold mb-8">Patients List</h3>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Age</th>
                <th className="border border-gray-300 px-4 py-2">Medical History</th>
                <th className="border border-gray-300 px-4 py-2">Treatment Plan</th>
              </tr>
            </thead>
            <tbody>
              {patients?.map((data, index) => (
                <tr
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      to={`/patientdetails/${data._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {data?.name}
                    </Link>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{data?.age}</td>
                  <td className="border border-gray-300 px-4 py-2">{data?.medicalHistory}</td>
                  <td className="border border-gray-300 px-4 py-2">{data?.treatmentPlan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
