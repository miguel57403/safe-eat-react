import { DeliveriesPage } from "pages/Deliveries";
import { HomePage } from "pages/Home";
import { IngredientsPage } from "pages/Ingredients";
import { OrdersPage } from "pages/Orders";
import { ProductsPage } from "pages/Products";
import { ProductsFormPage } from "pages/ProductsForm";
import { SectionsPage } from "pages/Sections";
import { NotFoundPage } from "pages/NotFound";
import { Navigate, Route, Routes } from "react-router-dom";
import { IngredientsFormPage } from "pages/IngredientsForm";

export const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/new" element={<ProductsFormPage />} />
      <Route path="/products/:id" element={<ProductsFormPage />} />
      <Route path="/ingredients" element={<IngredientsPage />} />
      <Route path="/ingredients/new" element={<IngredientsFormPage />} />
      <Route path="/ingredients/:id" element={<IngredientsFormPage />} />
      <Route path="/deliveries" element={<DeliveriesPage />} />
      <Route path="/sections" element={<SectionsPage />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
