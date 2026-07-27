import { useState } from "react";

const getInitialItems = () => [
  { placeholder: "Enter Foot Pel", material: "", qty: "", rate: "" },
  { placeholder: "Enter Foot Jali", material: "", qty: "", rate: "" },
  { placeholder: "Enter Besal Tar", material: "", qty: "", rate: "" },
  { placeholder: "Enter FT Teka", material: "", qty: "", rate: "" },
  { placeholder: "Hut", material: "", qty: "", rate: "" },
  { placeholder: "Tektar Bhadu", material: "", qty: "", rate: "" },
  { placeholder: "FitigaMani", material: "", qty: "", rate: "" },
  { placeholder: "Vehicle Bhadu", material: "", qty: "", rate: "" },
];

export default function Home() {
  const [projectName, setProjectName] = useState("");
  const [items, setItems] = useState(getInitialItems());

  const handleChange = (index, field, value) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const handleRefresh = () => {
    setProjectName("");
    setItems(getInitialItems());
  };

  const total = items.reduce(
    (sum, item) =>
      sum + (Number(item.qty) || 0) * (Number(item.rate) || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">

        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Enter Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-80 h-12 border rounded-lg px-3 text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleRefresh}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
          >
            Refresh
          </button>
        </div>

        <table className="w-full border-2 border-gray-400 text-center">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border p-3">Material</th>
              <th className="border p-3">Quantity</th>
              <th className="border p-3">Rate</th>
              <th className="border p-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border p-3">
                  <input
                    type="text"
                    placeholder={item.placeholder}
                    value={item.material}
                    onChange={(e) =>
                      handleChange(index, "material", e.target.value)
                    }
                    className="w-full h-11 border rounded-lg px-2 text-center"
                  />
                </td>

                <td className="border p-3">
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={item.qty}
                    onChange={(e) =>
                      handleChange(index, "qty", e.target.value)
                    }
                    className="w-full h-11 border rounded-lg px-2 text-center"
                  />
                </td>

                <td className="border p-3">
                  <input
                    type="number"
                    placeholder="Rate"
                    value={item.rate}
                    onChange={(e) =>
                      handleChange(index, "rate", e.target.value)
                    }
                    className="w-full h-11 border rounded-lg px-2 text-center"
                  />
                </td>

                <td className="border p-3 font-bold">
                  {(
                    (Number(item.qty) || 0) *
                    (Number(item.rate) || 0)
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-6">
          <div className="w-64 border rounded-lg shadow">
            <div className="flex justify-between p-4">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-blue-600">
                {total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}