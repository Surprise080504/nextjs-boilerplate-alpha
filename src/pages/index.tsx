/***********************************/
/*╔═══════════════════════════════╗
  ║ Import Modules and Components ║
  ╚═══════════════════════════════╝*/
/***********************************/

//import modules
import type { NextPage } from 'next';
// import components
import SeoHelper from './_seo_helper';

/**************************/
/*╔══════════════════════╗
  ║ Component Definition ║
  ╚══════════════════════╝*/
/**************************/

const Dashboard: NextPage = () => {
  return (
    <>
      <SeoHelper title="NFolio | Dashboard" description="Discover, track & analyize data of NFTs" />
      <h1>Dashboard</h1>
    </>
  );
};

/**********************/
/*╔══════════════════╗
  ║ Export Component ║
  ╚══════════════════╝*/
/**********************/

export default Dashboard;
