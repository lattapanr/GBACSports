const AgeGroupsTable = () => {
    return (
      <section className="flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          GBAC Age Groups 2024-2025
        </h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr>
              <th className="px-2 sm:px-4 py-2 border border-gray-300 bg-gray-100 md:w-auto">
                Section
              </th>
              <th className="px-2 sm:px-4 py-2 border border-gray-300 bg-gray-100 md:w-auto">
                Division
              </th>
              <th className="px-2 sm:px-4 py-2 border border-gray-300 bg-gray-100 w-3/5 md:w-auto">
                Birth Date Ranges 2024-2025
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                rowSpan="3"
                className="text-xs sm:text-sm text-center font-medium sm:px-4 py-2 border border-gray-300 bg-gray-200 w-1/5 md:w-auto"
              >
                Primary
              </td>
              <td className="text-xs sm:text-sm px-2 sm:px-4 py-2 border border-gray-300 w-1/5 md:w-auto">U7</td>
              <td className="text-xs sm:text-sm px-2 sm:px-4 py-2 border border-gray-300 w-3/5 md:w-auto">
                Students are eligible if they have not reached the age of 7 years
                before August 1st of the current school year (August 1st 2024).
                <br />
                Students are eligible if they turn 7 years old on or after August
                1st of the current school year (August 1st 2024).
              </td>
            </tr>
            <tr>
              <td className="text-xs sm:text-sm px-2 sm:px-4 py-2 border border-gray-300 w-1/5 md:w-auto">U9</td>
              <td className="text-xs sm:text-sm px-2 sm:px-4 py-2 border border-gray-300 w-3/5 md:w-auto">
                Students are eligible if they have not reached the age of 9 years
                before August 1st of the current school year (August 1st 2024).
                <br />
                Students are eligible if they turn 9 years old on or after August
                1st of the current school year (August 1st 2024).
              </td>
            </tr>
            <tr>
              <td className="text-xs sm:text-sm px-2 sm:px-4 py-2 border border-gray-300 w-1/5 md:w-auto">U11</td>
              <td className="text-xs sm:text-sm px-2 sm:px-4 py-2 border border-gray-300 w-3/5 md:w-auto">
                Students are eligible if they have not reached the age of 11 years
                before August 1st of the current school year (August 1st 2024).
                <br />
                Students are eligible if they turn 11 years old on or after August
                1st of the current school year (August 1st 2024).
              </td>
            </tr>
            <tr>
              <td
                rowSpan="3"
                className="text-xs sm:text-sm text-center font-medium sm:px-4 py-2 border border-gray-300 bg-gray-200 w-1/5 md:w-auto"
              >
                Secondary
              </td>
              <td className="text-xs sm:text-sm px-2 sm:px-4 py-2 border border-gray-300 w-1/5 md:w-auto">U13</td>
              <td className="text-xs sm:text-sm px-2 sm:px-4 py-2 border border-gray-300 w-3/5 md:w-auto">
                Students are eligible if they have not reached the age of 13 years
                before August 1st of the current school year (August 1st 2024).
                <br />
                Students are eligible if they turn 13 years old on or after August
                1st of the current school year (August 1st 2024).
              </td>
            </tr>
            <tr>
              <td className="px-2 sm:px-4 py-2 border border-gray-300 w-1/5 md:w-auto">U15</td>
              <td className="text-xs sm:text-sm px-2 sm:px-4 py-2 border border-gray-300 w-3/5 md:w-auto">
                Students are eligible if they have not reached the age of 15 years
                before August 1st of the current school year (August 1st 2024).
                <br />
                Students are eligible if they turn 15 years old on or after August
                1st of the current school year (August 1st 2024).
              </td>
            </tr>
            <tr>
              <td className="px-2 sm:px-4 py-2 border border-gray-300 w-1/5 md:w-auto">U19</td>
              <td className="text-xs sm:text-sm px-2 sm:px-4 py-2 border border-gray-300 w-3/5 md:w-auto">
                Students are eligible if they have not reached the age of 19 years
                before August 1st of the current school year (August 1st 2024).
                <br />
                Students are eligible if they turn 19 years old on or after August
                1st of the current school year (August 1st 2024).
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  };
  
  export default AgeGroupsTable;
  