const GBACConference = () => {
  return (
    <div className="bg-green w-full h-full lg:min-h-screen py-10">
      <div className="bg-green max-w-3xl mx-auto p-4">
        {/* GBAC Conferences Table */}
        <h2 className="text-2xl text-white md:text-3xl font-semibold mb-4 border-b-2 w-fit">
          GBAC Conferences
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="bg-black text-white border border-gray-300 px-4 py-2">
                  GBAC West
                </th>
                <th className="bg-white text-black border border-gray-300 px-4 py-2">
                  GBAC East
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-ans text-ans-purple border border-gray-300 px-4 py-2">
                  Amnuay Silpa School
                </td>
                <td className="bg-bcb text-bcb-yellow border border-gray-300 px-4 py-2">
                  Brighton College Bangkok
                </td>
              </tr>
              <tr>
                <td className="bg-ast text-white border border-gray-300 px-4 py-2">
                  Aster International School
                </td>
                <td className="bg-lfib text-lfib-blue border border-gray-300 px-4 py-2">
                  Lycée Français International de Bangkok
                </td>
              </tr>
              <tr>
                <td className="bg-gis text-white border border-gray-300 px-4 py-2">
                  Garden International School
                </td>
                <td className="bg-s107 text-s107-blue border border-gray-300 px-4 py-2">
                  St. Andrews International School, Sukhumvit 107
                </td>
              </tr>
              <tr>
                <td className="bg-ppip text-red border border-gray-300 px-4 py-2">
                  Prasarnmit Primary International Programme
                </td>
                <td className="bg-tsi text-black border border-gray-300 px-4 py-2">
                  TSI International School
                </td>
              </tr>
              <tr>
                <td className="bg-black text-red border border-gray-300 px-4 py-2">
                  Satit Prasarnmit International Programme
                </td>
                <td className="bg-vis text-white border border-gray-300 px-4 py-2">
                  Verso International School
                </td>
              </tr>
              <tr>
                <td className="bg-white text-sisb-blue border border-gray-300 px-4 py-2">
                  Singapore International School (Pracha Uthit)
                </td>
                <td className="bg-wcib text-black border border-gray-300 px-4 py-2">
                  Wellington College Bangkok
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Playoff Host Conference Rotation Table */}
        <h2 className="text-xl text-white md:text-3xl font-semibold mt-8 mb-4 border-b-2 w-fit">
          Playoff Host Conference Rotation
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="text-white border border-gray-300 px-4 py-2">
                  Host
                </th>
                <th className="text-white border border-gray-300 px-4 py-2">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-black text-white border border-gray-300 px-4 py-2">
                  GBAC West
                </td>
                <td className="bg-black text-white border border-gray-300 px-4 py-2">
                  2023-2024
                </td>
              </tr>
              <tr>
                <td className="bg-white text-black  border border-gray-300 px-4 py-2">
                  GBAC East
                </td>
                <td className="bg-white text-black border border-gray-300 px-4 py-2">
                  2024-2025
                </td>
              </tr>
              <tr>
                <td className="bg-black text-white border border-gray-300 px-4 py-2">
                  GBAC West
                </td>
                <td className="bg-black text-white border border-gray-300 px-4 py-2">
                  2025-2026
                </td>
              </tr>
              <tr>
                <td className="bg-white text-black  border border-gray-300 px-4 py-2">
                  GBAC East
                </td>
                <td className="bg-white text-black border border-gray-300 px-4 py-2">
                  2026-2027
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GBACConference;
