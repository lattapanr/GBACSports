import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/Mainlayout";
import Giant from "./pages/Giants";
import NotFoundPage from "./pages/NotFoundPage";
import AllStarsPage from "./pages/AllStarsPage";
import LocationsPage from "./pages/LocationsPage";
import CalendarPage from "./pages/CalendarPage";
import MemberSchoolsPage from "./pages/MemberSchoolsPage";
import ContactsPage from "./pages/ContactsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/members" element={<MemberSchoolsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/all-stars" element={<AllStarsPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/giants" element={<Giant />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
