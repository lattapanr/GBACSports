import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-router-dom';

const AllStarsPage = () => {
  return (
    <div className="max-w-screen-laptop h-screen bg-green mx-auto">
      <Parallax pages={5} style={{ top: '0', left: '0', overflow: 'hidden' }}>
        <ParallaxLayer offset={0} speed={0.5}>
          <h2>Great Bangkok Athletics Conference All-Star Match.</h2>
          <p>
            The Greater Bangkok Athletics Conference All-Star Matches are exhibition matches hosted at the end of each Under 15 and 18 football and basketball tournament or during a weekend All-Star Day. These matches showcase the best players from each member's school participating in the competition. Each member school selects pupils to represent their conference in the exhibition match.
          </p>
          <p>
            The head coach of the team with the best record in each conference during the league season is chosen to lead their respective conference in the All-Star Match.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <h2>GBAC All-Star Match Media.</h2>
          <p>
            Videos and photos from the GBAC All-Star East vs West Matches can be found in{' '}
            <Link to="https://drive.google.com/drive/folders/1I_vcZKuagoWHa-bQhlA0-efzixPm7pVj">this folder</Link>.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <h2>All-Star pupil selection criteria.</h2>
          <p>
            Schools will nominate pupils who have excelled in the tournament sport over the GBAC season, consistently impacting matches.
          </p>
          <ul>
            <h3>Nominated pupils will also be:</h3>
            <li>A positive role model and inspiration to others.</li>
            <li>Someone who reflects the core values of the selecting school's PE department and Co-curricular Activities Programme.</li>
            <li>Someone whose outstanding attitude towards GBAC Sport has positively impacted the wider school community.</li>
          </ul>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <h2>Pupils wanting to buy a GBAC All-Star jersey.</h2>
          <p>
            Most pupils who have previously participated in an All-Star Match have already purchased the jerseys they wore on the day as a memento, and all nominated pupils can do so for ฿1,590. Pupils who buy their jersey will also receive a GBAC representation certificate of achievement to acknowledge their efforts and an official GBAC letter of recognition confirming their participation in the prestigious event. Both certificate and letter could be used to support university applications, and all funds raised will go towards maintaining the GBAC All-Stars for future academic years.
          </p>
          <p>
            If you would like to purchase a GBAC All-Star match jersey, please fill in this{' '}
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSerpaM1Z6dsDRSpA_M6tw13m7FZ7qIliH8XAzfZ0dIQ_4QKJw/viewform">
              Google Form
            </Link>, which allows you to upload an image with your proof of transfer.
          </p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default AllStarsPage;
