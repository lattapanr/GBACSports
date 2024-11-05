import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import GiantsPage from "./pages/GiantsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AllStarsPage from "./pages/AllStarsPage";
import LocationsPage from "./pages/LocationsPage";
import CalendarPage from "./pages/CalendarPage";
import MemberSchoolsPage from "./pages/MemberSchoolsPage";
import ContactsPage from "./pages/ContactsPage";
import SponsorsPage from "./pages/SponsorsPage";
import MembershipInfoPage from "./pages/additionalPages/MembershipInfoPage";
import MedicalContactsPage from "./pages/additionalPages/MedicalContactsPage";
import CoreExpansionDevelopmentalPage from "./pages/additionalPages/CoreExpansionDevelopmentalPage";
import AgeGroupsPage from "./pages/additionalPages/AgeGroupsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/members" element={<MemberSchoolsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/all-stars" element={<AllStarsPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/giants" element={<GiantsPage />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
      <Route path="/application" element={<MembershipInfoPage />} />
      <Route path="/core" element={<CoreExpansionDevelopmentalPage />} />
      <Route path="/medical" element={<MedicalContactsPage />} />
      <Route path="/age-groups" element={<AgeGroupsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
