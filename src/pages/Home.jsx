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
    <div className="min-h-screen bg-gray-100 p-2 md:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-3 md:p-6">

        {/* Header */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3 mb-5">

          <input
            type="text"
            placeholder="Enter Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full md:w-80 h-10 md:h-12 border rounded-lg px-2 text-center text-base md:text-xl"
          />

          <button
            onClick={handleRefresh}
            className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-lg"
          >
            Refresh
          </button>

        </div>

        {/* Table */}
        <table className="w-full border border-gray-400 text-center text-xs md:text-base">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border p-2">Material</th>
              <th className="border p-2">Qty</th>
              <th className="border p-2">Rate</th>
              <th className="border p-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border p-1">
                  <input
                    type="text"
                    placeholder={item.placeholder}
                    value={item.material}
                    onChange={(e) =>
                      handleChange(index, "material", e.target.value)
                    }
                    className="w-full h-8 md:h-10 border rounded text-center text-xs md:text-base px-1"
                  />
                </td>

                <td className="border p-1">
                  <input
                    type="number"
                    placeholder="Qty"
                    value={item.qty}
                    onChange={(e) =>
                      handleChange(index, "qty", e.target.value)
                    }
                    className="w-full h-8 md:h-10 border rounded text-center text-xs md:text-base px-1"
                  />
                </td>

                <td className="border p-1">
                  <input
                    type="number"
                    placeholder="Rate"
                    value={item.rate}
                    onChange={(e) =>
                      handleChange(index, "rate", e.target.value)
                    }
                    className="w-full h-8 md:h-10 border rounded text-center text-xs md:text-base px-1"
                  />
                </td>

                <td className="border font-bold text-xs md:text-lg">
                  {(
                    (Number(item.qty) || 0) *
                    (Number(item.rate) || 0)
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="flex justify-center md:justify-end mt-5">
          <div className="w-full md:w-64 border rounded-lg shadow">
            <div className="flex justify-between p-3">
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