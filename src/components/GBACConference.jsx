import { motion } from "framer-motion";

const GBACConference = () => {
  return (
    <div className="w-full h-full lg:min-h-screen">
      <div className="max-w-3xl mx-auto p-4 mt-10">
        {/* GBAC Conferences Table */}
        <motion.h2
          initial={{ width: "50%" }}
          whileInView={{
            width: "100%",
            transition: { delay: 0.2, duration: 0.2 },
          }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-2xl md:text-3xl font-black mb-4 border-b-4 border-black"
        >
          GBAC Conferences
        </motion.h2>
        <div className="overflow-x-auto mb-16">
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
                  Amnuay Silpa School <br /> <br />
                </td>
                <td className="bg-bcb text-bcb-yellow border border-gray-300 px-4 py-2">
                  Brighton College Bangkok
                </td>
              </tr>
              <tr>
                <td className="bg-ast text-white border border-gray-300 px-4 py-2">
                  Aster International School <br /> <br />
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
                <td className="bg-wcib text-black border border-black px-4 py-2">
                  Wellington College Bangkok
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Playoff Host Conference Rotation Table */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.2, duration: 1 },
            x: 0,
          }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-2xl md:text-3xl font-black mb-4 border-b-4 border-black"
        >
          Playoff Host Conference Rotation
        </motion.h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Host</th>
                <th className="border border-gray-300 px-4 py-2">Year</th>
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
