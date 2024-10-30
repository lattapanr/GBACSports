import { Link } from "react-router-dom";
import CalendarPageImage from "../assets/images/calendar-photo.jpg"

const CalendarPage = () => {
    return (
        <div className="bg-light-yellow lg:bg-white text-black w-full max-w-screen-laptop h-full lg:h-full mx-auto">
            <div className="w-10/12 lg:w-full mx-auto flex flex-col">
                <h1 className="lg:text-lg pt-32 lg:pt-12 pb-2">Click <Link className="underline">here</Link> for GBAC Season 1 24/25 basketball league fixtures & results</h1>

                <h2 className="lg:hidden">🖱️Click <Link to="https://docs.google.com/spreadsheets/d/1DOSe9OL-GDkMhaf2bc231TojjjLHDbTTTBoqcL3wIH0/edit?gid=180743350#gid=180743350" className="underline">here</Link> to open GBAC tournament dates in Google Sheets. </h2>

                <h2 className="lg:hidden">🖱️Click <Link to="https://docs.google.com/spreadsheets/d/1l0w6PjtwT6qVxiNk7ibx1_MG3V5oEKS4sjv1h55YONg/edit?gid=239981663#gid=239981663" className="underline">here</Link> for GBAC basketball league fixtures and results</h2>

                <h2 className="lg:hidden">🖱️Click <Link to="https://docs.google.com/spreadsheets/d/1mfmcCEA67n0YSCk65e84kamXjXJlrrOoV3tlkBO3D9g/edit?gid=525453695#gid=525453695" className="underline">here</Link> for GBAC football league fixtures and results </h2>
                
                <img src={CalendarPageImage} alt="GBAC's U19 boys lining up on a football field" className="w-full sm:w-10/12 self-center py-8 lg:hidden"/>
            </div>

            


            <div className="hidden lg:block">
                <iframe
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR23yOLTjYfbzrDDmF0YZvwGPsxNNLhaPFlcSBd_bVvuwI080Aet_JHAljPQhGZifVsAk8Q1LKvcKzU/pubhtml?gid=180743350&single=true"
                    width="100%"
                    height="600px"
                    className="w-[940px] h-[600px] border-none overflow-hidden mx-auto mb-10"
                ></iframe>
            </div>
        </div>
    );
  };
  
  export default CalendarPage;
  
  