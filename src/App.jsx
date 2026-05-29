import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import PageLoader from './components/PageLoader.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import ServicesIndex from './pages/services/ServicesIndex.jsx';
import ServiceDetail from './pages/services/ServiceDetail.jsx';
import CataractSelfTest from './pages/services/CataractSelfTest.jsx';
import CataractSurgeryOptions from './pages/services/CataractSurgeryOptions.jsx';
import PremiumIOL from './pages/services/PremiumIOL.jsx';
import LasikSelfTest from './pages/services/LasikSelfTest.jsx';
import PRK from './pages/services/PRK.jsx';
import GlaucomaWhatIs from './pages/services/GlaucomaWhatIs.jsx';
import GlaucomaTreatment from './pages/services/GlaucomaTreatment.jsx';
import AnnualExams from './pages/services/AnnualExams.jsx';

import DoctorsIndex from './pages/doctors/DoctorsIndex.jsx';
import DoctorProfile from './pages/doctors/DoctorProfile.jsx';

import LocationsIndex from './pages/locations/LocationsIndex.jsx';
import LocationDetail from './pages/locations/LocationDetail.jsx';

import PatientIndex from './pages/patient/PatientIndex.jsx';
import YourVisit from './pages/patient/YourVisit.jsx';
import Financing from './pages/patient/Financing.jsx';
import FormsInsurance from './pages/patient/FormsInsurance.jsx';
import PostOp from './pages/patient/PostOp.jsx';
import EyeAnatomy from './pages/patient/EyeAnatomy.jsx';
import Referral from './pages/patient/Referral.jsx';

import BlogIndex from './pages/blog/BlogIndex.jsx';
import BlogPost from './pages/blog/BlogPost.jsx';

import About from './pages/about/About.jsx';
import Testimonials from './pages/about/Testimonials.jsx';

import Contact from './pages/Contact.jsx';
import RequestAppointment from './pages/RequestAppointment.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const location = useLocation();

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <ScrollToTop />
      <Nav />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />

              <Route path="/services" element={<ServicesIndex />} />
              <Route path="/services/cataracts/self-test" element={<CataractSelfTest />} />
              <Route path="/services/cataracts/surgery-options" element={<CataractSurgeryOptions />} />
              <Route path="/services/cataracts/premium-iol" element={<PremiumIOL />} />
              <Route path="/services/lasik/self-test" element={<LasikSelfTest />} />
              <Route path="/services/lasik/prk" element={<PRK />} />
              <Route path="/services/glaucoma/what-is" element={<GlaucomaWhatIs />} />
              <Route path="/services/glaucoma/treatment" element={<GlaucomaTreatment />} />
              <Route path="/services/optical/eye-exams" element={<AnnualExams />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />

              <Route path="/doctors" element={<DoctorsIndex />} />
              <Route path="/doctors/:slug" element={<DoctorProfile />} />

              <Route path="/locations" element={<LocationsIndex />} />
              <Route path="/locations/:slug" element={<LocationDetail />} />

              <Route path="/patient-resources" element={<PatientIndex />} />
              <Route path="/patient-resources/your-visit" element={<YourVisit />} />
              <Route path="/patient-resources/financing" element={<Financing />} />
              <Route path="/patient-resources/forms-insurance" element={<FormsInsurance />} />
              <Route path="/patient-resources/post-op-forms" element={<PostOp />} />
              <Route path="/patient-resources/eye-anatomy" element={<EyeAnatomy />} />
              <Route path="/patient-resources/referral-pcp" element={<Referral />} />

              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<Testimonials />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/request-appointment" element={<RequestAppointment />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
