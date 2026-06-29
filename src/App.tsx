import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/layouts/PublicLayout';
import AdminLayout from './components/layouts/AdminLayout';
import HomePage from './pages/public/HomePage';
import AdmissionPage from './pages/public/AdmissionPage';
import LoginPage from './pages/public/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentManagement from './pages/admin/StudentManagement';
import CourseManagement from './pages/admin/CourseManagement';
import GalleryManagement from './pages/admin/GalleryManagement';
import AnnouncementsManagement from './pages/admin/AnnouncementsManagement';
import ProtectedRoute from './components/shared/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="admission" element={<AdmissionPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="students" element={<StudentManagement />} />
        <Route path="courses" element={<CourseManagement />} />
        <Route path="gallery" element={<GalleryManagement />} />
        <Route path="announcements" element={<AnnouncementsManagement />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
