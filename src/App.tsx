import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@layouts";
import ExportPaper from "@pages/draft/Individual/pages/ExportPaper/ExportPaper";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
