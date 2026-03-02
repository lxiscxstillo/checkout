import Header from './components/Header';
import StepIndicator from './components/StepIndicator';
import CheckoutLayout from './components/CheckoutLayout';
import Features from './components/Features';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#f5f7ff]">
      <Header />
      <StepIndicator currentStep={2} />
      <CheckoutLayout />
      <Features />
    </div>
  );
}
