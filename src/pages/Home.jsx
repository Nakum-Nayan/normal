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
  const totalFt = 2300;

  const [items, setItems] = useState(getInitialItems());

  const handleChange = (index, field, value) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const handleRefresh = () => {
    setItems(getInitialItems());
  };

  const total = items.reduce(
    (sum, item) =>
      sum + (Number(item.qty) || 0) * (Number(item.rate) || 0),
    0
  );

  const ratePerFt = totalFt ? (total / totalFt).toFixed(2) : "0.00";

  return (
    <div className="min-h-screen bg-gray-100 p-8 ">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Material Calculation
          </h1>

          <button
            onClick={handleRefresh}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
          >
            Refresh
          </button>
        </div>

        <div className="flex justify-center">
          <table className="w-full max-w-5xl border-2 border-gray-400 text-center">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border p-4">Material</th>
                <th className="border p-4">Quantity</th>
                <th className="border p-4">Rate</th>
                <th className="border p-4">Amount</th>
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
                      className="w-full h-12 border rounded-lg px-3 text-center"
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
                      className="w-full h-12 border rounded-lg px-3 text-center"
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
                      className="w-full h-12 border rounded-lg px-3 text-center"
                    />
                  </td>

                  <td className="border p-3 font-bold text-lg">
                    {(
                      (Number(item.qty) || 0) *
                      (Number(item.rate) || 0)
                    ).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-end">
          <div className="w-80 border rounded-lg shadow bg-white">
            <div className="flex justify-between border-b p-3">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-blue-700">
                {total.toLocaleString()}
              </span>
            </div>

            {/* <div className="flex justify-between p-3">
              <span className="font-semibold">Rate / Ft</span>
              <span className="font-bold text-green-700">
                {ratePerFt}
              </span>
            </div> */}
          </div>
        </div>

      </div>
    </div>
  );
}