import { useState, useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

const getInitialItems = () => [
  { placeholder: "Enter Foot Pel", material: "", qty: "", rate: "" },
  { placeholder: "Enter Foot Jali", material: "", qty: "", rate: "" },
  { placeholder: "Enter Besal Tar", material: "", qty: "", rate: "" },
  { placeholder: "Enter FT Teka", material: "", qty: "", rate: "" },
  { placeholder: "Huk", material: "", qty: "", rate: "" },
  { placeholder: "Tektar Bhadu", material: "", qty: "", rate: "" },
  { placeholder: "FitigaMani", material: "", qty: "", rate: "" },
  { placeholder: "Vehicle Bhadu", material: "", qty: "", rate: "" },
  { placeholder: "Other Value", material: "", qty: "", rate: "" },
  { placeholder: "Other Value", material: "", qty: "", rate: "" },
  { placeholder: "Other Value", material: "", qty: "", rate: "" },
];

export default function Home() {
  const pdfRef = useRef(null);

  const [projectName, setProjectName] = useState("");
  const [items, setItems] = useState(getInitialItems());

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleRefresh = () => {
    setProjectName("");
    setItems(getInitialItems());
  };

  const total = items.reduce((sum, item) => {
    return (
      sum +
      (Number(item.qty) || 0) *
      (Number(item.rate) || 0)
    );
  }, 0);

  const downloadPDF = async () => {
    try {
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        onclone: (document) => {
          document.body.style.color = "#000";
          document.body.style.background = "#fff";
        },
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight =
        (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
      );

      let fileName = projectName.trim();

      if (fileName === "") {
        fileName = "Material-Calculator";
      }

      fileName = fileName.replace(/[\\/:*?"<>|]/g, "");

      pdf.save(`${fileName}.pdf`);
    } catch (err) {
      console.log(err);
      alert("PDF Download Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 md:p-6">

      <div
        ref={pdfRef}
        className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4"
      >

        <div className="flex flex-col-reverse md:flex-row justify-between gap-3 mb-6">

          <input
            type="text"
            placeholder="Enter Name"
            value={projectName}
            onChange={(e) =>
              setProjectName(e.target.value)
            }
            className="w-full md:w-80 h-11 border rounded-lg px-3 text-center"
          />

          <button
            onClick={handleRefresh}
            className="bg-red-600 text-white rounded-lg px-6 py-2 hover:bg-red-700"
          >
            Refresh
          </button>

        </div>

        <table className="w-full border text-center border-gray-400">
          <thead className="text-white" style={{ backgroundColor: "#2563eb" }}>
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
                    className="w-full h-10 border rounded px-2 text-center outline-none"
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
                    className="w-full h-10 border rounded px-2 text-center outline-none"
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
                    className="w-full h-10 border rounded px-2 text-center outline-none"
                  />
                </td>

                <td className="border font-bold">
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
          <div className="w-72 border rounded-lg shadow-md bg-white">
            <div className="flex justify-between p-4">
              <span className="font-semibold text-lg">
                Total
              </span>

              <span className="font-bold text-lg" style={{ color: "#2563eb" }}>
                ₹ {total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={downloadPDF}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg"
        >
          Download PDF
        </button>
      </div>

    </div>
  );
}