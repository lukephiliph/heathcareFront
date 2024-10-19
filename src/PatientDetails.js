import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const PatientDetails = () => {
  const [patients, setPatients] = useState();
  const [show, setShow] = useState(false);
  const [fullDetails, setFullDetails] = useState();
  const params = useParams();

  console.log(params.id, 'params');

  const [formData, setFormData] = useState({
    patientId: params.id.toString(),
    treatment: '',
    doctorNotes: '',
  });

  useEffect(() => {
    const details = async () => {
      const response = await fetch(`http://localhost:3000/api/getApatient/${params.id}`);
      const data = await response.json();
      setPatients(data);
    };
    details();
  }, [params.id]);

  useEffect(() => {
    const fullDetails = async () => {
      const response = await fetch(`http://localhost:3000/api/authorizations/${params.id}`);
      const data = await response.json();
      console.log(data, 'intheData');
      setFullDetails(data);
    };
    fullDetails();
  }, []);

  console.log(patients, 'patients');

  const handleNotes = async () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = async () => {
    const response = await fetch('http://localhost:3000/api/authorizations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data, 'responsepost');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl text-center text-blue-900 font-semibold mb-8">Patient Details</h3>

        {fullDetails ? (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <table className="w-full text-left border-collapse">
              <thead className="bg-blue-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Age</th>
                  <th className="border border-gray-300 px-4 py-2">Medical History</th>
                  <th className="border border-gray-300 px-4 py-2">Treatment Plan</th>
                  <th className="border border-gray-300 px-4 py-2">Doctor's Note</th>
                  <th className="border border-gray-300 px-4 py-2">Treatment Required</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                  <th className="border border-gray-300 px-4 py-2">Created At</th>
                </tr>
              </thead>
              {fullDetails?.map((patients) => (
                <tbody key={patients?.id}>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{patients?.patientId?.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{patients?.patientId?.age}</td>
                    <td className="border border-gray-300 px-4 py-2">{patients?.patientId?.medicalHistory}</td>
                    <td className="border border-gray-300 px-4 py-2">{patients?.patientId?.treatmentPlan}</td>
                    <td className="border border-gray-300 px-4 py-2">{patients?.doctorNotes}</td>
                    <td className="border border-gray-300 px-4 py-2">{patients?.treatment}</td>
                    <td className="border border-gray-300 px-4 py-2">{patients?.status}</td>
                    <td className="border border-gray-300 px-4 py-2">{patients?.createdAt}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="text-center mt-6">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                onClick={handleNotes}
              >
                Add Doctor's Note
              </button>
              {show && (
                <form className="mt-4 bg-gray-100 p-4 rounded-lg">
                  <div className="mb-4">
                    <label className="block text-gray-700">Treatment</label>
                    <input
                      className="border border-gray-300 rounded-md w-full p-2 mt-2"
                      type="text"
                      value={formData.treatment}
                      name="treatment"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Doctor's Note</label>
                    <input
                      className="border border-gray-300 rounded-md w-full p-2 mt-2"
                      type="text"
                      value={formData.doctorNotes}
                      name="doctorNotes"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Update
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center text-xl text-gray-500">Loading Patient Details...</div>
        )}
      </div>
    </div>
  );
};
