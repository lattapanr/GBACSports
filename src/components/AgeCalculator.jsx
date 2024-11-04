import   { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState(
    "Please select the date of birth to see the eligible Age Group."
  );

  const calculateAgeGroup = (e) => {
    e.preventDefault();

    const defaultDate = "2024-08-01"; // fixed date for age calculation
    const startDate = new Date(birthDate);
    const endDate = new Date(defaultDate);

    if (isNaN(startDate) || isNaN(endDate)) {
      setResult(
        "Date of birth needs to be selected to see the eligible Age Group."
      );
      return;
    }

    let yearDifference = endDate.getFullYear() - startDate.getFullYear();
    let monthDifference = endDate.getMonth() - startDate.getMonth();
    let dayDifference = endDate.getDate() - startDate.getDate();

    if (dayDifference < 0) {
      monthDifference--;
      dayDifference += new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        0
      ).getDate();
    }
    if (monthDifference < 0) {
      yearDifference--;
      monthDifference += 12;
    }

    let eligibility = "";

    if (yearDifference < 7) {
      eligibility = "eligible for U7";
    } else if (yearDifference < 9) {
      eligibility = "eligible for U9";
    } else if (yearDifference < 11) {
      eligibility = "eligible for U11";
    } else if (yearDifference < 13) {
      eligibility = "eligible for U13";
    } else if (yearDifference < 15) {
      eligibility = "eligible for U15";
    } else if (yearDifference < 19) {
      eligibility = "eligible for U19";
    } else {
      eligibility = "not eligible for any age group";
    }

    const formattedDate = endDate.toLocaleDateString("en-GB");
    setResult(
      `On ${formattedDate}, the student's age is ${yearDifference} ${
        yearDifference > 1 ? "years" : "year"
      }, ${monthDifference} ${
        monthDifference > 1 ? "months" : "month"
      }, ${dayDifference} ${
        dayDifference > 1 ? "days" : "day"
      } old and is <strong><u>${eligibility}</u></strong>.`
    );
  };

  return (
    <section className="bg-white text-black border-4 border-yellow-600 rounded-lg p-4 m-8 w-full mx-auto">
      <form onSubmit={calculateAgeGroup} className="flex flex-col items-center">
        <label htmlFor="birthday" className="self-start text-blue-800 font-bold mb-1">
          Date of birth:
        </label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
          className="text-blue-800 text-sm border border-red-800 rounded mb-4 p-1 w-full"
        />
        <label htmlFor="default-date" className="self-start text-blue-800 font-bold mb-1">
          Age on the date of:
        </label>
        <input
          type="date"
          value="2024-08-01"
          id="default-date"
          name="default-date"
          disabled
          className="text-blue-800 text-sm border border-red-800 rounded mb-4 p-1 w-full"
        />
        <button
          type="submit"
          className="calculate-btn bg-yellow-600 text-white font-bold py-1 px-3 rounded mt-2"
        >
          Calculate
        </button>
      </form>
      <div className="result mt-4">
        <h3 className="text-red-700 font-bold mb-2">Result:</h3>
        <p
          id="result-text"
          className="text-sm font-normal"
          dangerouslySetInnerHTML={{ __html: result }}
        ></p>
      </div>
    </section>
  );
};

export default AgeCalculator;
