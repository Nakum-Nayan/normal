function Hero() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-5">
          <h1 className="text-5xl font-bold">
            Home Construction Calculator
          </h1>

          <p className="mt-5 text-xl">
            Calculate Cement, Sand, Bricks, Steel and Total Cost
          </p>

          <button className="mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
            Start Calculation
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-5 py-10">

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            Project Details
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <input
              type="number"
              placeholder="Total Area (sq ft)"
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              placeholder="Length (ft)"
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              placeholder="Width (ft)"
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">
            Calculate
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white shadow rounded-xl p-5 text-center">
            <h3 className="text-xl font-semibold">Cement</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              460 Bags
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-5 text-center">
            <h3 className="text-xl font-semibold">Sand</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              24 Brass
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-5 text-center">
            <h3 className="text-xl font-semibold">Steel</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">
              90 Kg
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">Material</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Rate</th>
                <th className="p-4">Total</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b text-center">
                <td className="p-4">Cement</td>
                <td>460</td>
                <td>110</td>
                <td>50,600</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-4">Steel</td>
                <td>90</td>
                <td>120</td>
                <td>10,800</td>
              </tr>

              <tr className="text-center">
                <td className="p-4">Aggregate</td>
                <td>192</td>
                <td>300</td>
                <td>57,600</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Hero;