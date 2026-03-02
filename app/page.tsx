import Header from './components/Header';
import CheckoutLayout from './components/CheckoutLayout';
import Features from './components/Features';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#f5f7ff]">
      <Header />
      <CheckoutLayout />
      <Features />
    </div>
  );
}
