'use client';

import { useMemo, useState } from 'react';
import OrderItems, { type OrderItem } from './OrderItems';
import Summary, { type DeliveryOption } from './Summary';

const INITIAL_ORDER_ITEMS: OrderItem[] = [
  {
    id: 1,
    name: 'Silicone Case for iPhone 7',
    description: 'Product color: Midnight Blue, Turquoise Blue',
    quantity: 2,
    unitPrice: 18.2,
    icon: '📱',
    backgroundColor: 'from-teal-200 to-blue-200',
    borderColor: 'border-teal-300',
  },
  {
    id: 2,
    name: 'Tempered glass for iPhone',
    description: 'Size: iPhone 7, iPhone 8',
    quantity: 4,
    unitPrice: 5,
    icon: '🛡️',
    backgroundColor: 'from-slate-900 to-slate-800',
    borderColor: 'border-slate-900',
  },
  {
    id: 3,
    name: 'Tempered glass for iPhone',
    description: 'Size: iPhone 7, iPhone 8',
    quantity: 4,
    unitPrice: 5,
    icon: '🛡️',
    backgroundColor: 'from-slate-900 to-slate-800',
    borderColor: 'border-slate-900',
  },
];

const DELIVERY_OPTIONS: DeliveryOption[] = [
  {
    id: 'standard',
    label: 'Standard delivery',
    description: '3-5 business days',
    fee: 0,
  },
  {
    id: 'express',
    label: 'Express delivery',
    description: '1-2 business days',
    fee: 4.99,
  },
  {
    id: 'overnight',
    label: 'Overnight delivery',
    description: 'Next business day',
    fee: 9.99,
  },
];

const TAX_RATE = 0.21;
const INSURANCE_RATE = 0.09;

export default function CheckoutLayout() {
  const [items, setItems] = useState<OrderItem[]>(INITIAL_ORDER_ITEMS);
  const [isEditing, setIsEditing] = useState(false);
  const [deliveryOptionId, setDeliveryOptionId] = useState<string>('standard');
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0),
    [items],
  );

  const selectedDelivery = useMemo(
    () => DELIVERY_OPTIONS.find((option) => option.id === deliveryOptionId) ?? DELIVERY_OPTIONS[0],
    [deliveryOptionId],
  );

  const deliveryFee = selectedDelivery.fee;
  const tax = subtotal * TAX_RATE;
  const insurance = subtotal * INSURANCE_RATE;
  const discountAmount = subtotal * discountPercent;

  const handleIncreaseQuantity = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemoveItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddItem = () => {
    setItems((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((item) => item.id)) + 1 : 1;

      return [
        ...prev,
        {
          id: nextId,
          name: 'Tempered glass for iPhone',
          description: 'Universal size for most models',
          quantity: 1,
          unitPrice: 5,
          icon: '🛡️',
          backgroundColor: 'from-slate-900 to-slate-800',
          borderColor: 'border-slate-900',
        },
      ];
    });
  };

  const handleApplyDiscount = () => {
    const normalized = discountCode.trim().toUpperCase();

    if (!normalized) {
      setDiscountPercent(0);
      return;
    }

    if (normalized === 'SAVE10') {
      setDiscountPercent(0.1);
    } else if (normalized === 'SAVE20') {
      setDiscountPercent(0.2);
    } else {
      setDiscountPercent(0);
    }
  };

  return (
    <div className="w-full min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* Left Column - Order Items */}
          <div className="lg:col-span-2">
            <OrderItems
              items={items}
              isEditing={isEditing}
              showDiscountInput={showDiscountInput}
              discountCode={discountCode}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              onRemoveItem={handleRemoveItem}
              onAddItem={handleAddItem}
              onToggleEditing={() => setIsEditing((prev) => !prev)}
              onToggleDiscountInput={() =>
                setShowDiscountInput((prev) => !prev)
              }
              onDiscountCodeChange={setDiscountCode}
              onApplyDiscount={handleApplyDiscount}
            />
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <Summary
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              tax={tax}
              insurance={insurance}
              discountAmount={discountAmount}
              deliveryOptions={DELIVERY_OPTIONS}
              selectedDeliveryId={deliveryOptionId}
              onSelectDelivery={setDeliveryOptionId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
