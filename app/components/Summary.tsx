'use client';

import { useState } from 'react';

export interface DeliveryOption {
  id: string;
  label: string;
  description: string;
  fee: number;
}

interface SummaryProps {
  subtotal: number;
  deliveryFee: number;
  tax: number;
  insurance: number;
  discountAmount: number;
  deliveryOptions: DeliveryOption[];
  selectedDeliveryId: string;
  onSelectDelivery: (id: string) => void;
}

export default function Summary({
  subtotal,
  deliveryFee,
  tax,
  insurance,
  discountAmount,
  deliveryOptions,
  selectedDeliveryId,
  onSelectDelivery,
}: SummaryProps) {
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const total = subtotal + deliveryFee + tax + insurance - discountAmount;

  const selectedOption =
    deliveryOptions.find((option) => option.id === selectedDeliveryId) ??
    deliveryOptions[0];

  return (
    <div className="space-y-4">
      <div className="bg-white p-6 sm:p-7 shadow-[0_25px_60px_rgba(15,23,42,0.16)] border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Summary</h2>

        <div className="text-xs text-gray-600 mb-4 leading-relaxed">
          The total cost consists of the tax, insurance and the delivery charge.
        </div>

        <div className="space-y-0">
          <div className="flex justify-between items-center py-3 px-0 border-b border-gray-200">
            <span className="text-sm text-gray-700">Subtotal</span>
            <span className="text-sm font-semibold text-gray-900">
              €{subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center py-3 px-0 border-b border-gray-200">
            <span className="text-sm text-gray-700">Delivery</span>
            <span className="text-sm font-bold text-green-600">
              {deliveryFee === 0 ? 'FREE' : `€${deliveryFee.toFixed(2)}`}
            </span>
          </div>

          <div className="flex justify-between items-center py-3 px-0 border-b border-gray-200">
            <span className="text-sm text-gray-700">Tax</span>
            <span className="text-sm font-semibold text-gray-900">
              €{tax.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center py-3 px-0 border-b border-gray-200">
            <span className="text-sm text-gray-700">Insurance</span>
            <span className="text-sm font-semibold text-gray-900">
              €{insurance.toFixed(2)}
            </span>
          </div>

          {discountAmount > 0 && (
            <div className="flex justify-between items-center py-3 px-0 border-b border-gray-200">
              <span className="text-sm text-gray-700">Discount</span>
              <span className="text-sm font-semibold text-green-600">
                −€{discountAmount.toFixed(2)}
              </span>
            </div>
          )}

          <div className="flex justify-between items-center py-4 px-3 sm:px-4 bg-gray-50 -mx-5 sm:-mx-6 mt-4">
            <span className="text-base font-bold text-gray-900">TOTAL:</span>
            <span className="text-lg font-bold text-gray-900">
              €{total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setDeliveryOpen((open) => !open)}
        className="w-full bg-white p-5 sm:p-6 shadow-[0_15px_40px_rgba(15,23,42,0.08)] border border-gray-100 flex justify-between items-center hover:bg-gray-50 transition"
      >
        <div className="flex flex-col text-left">
          <span className="text-sm font-semibold text-gray-900">Delivery</span>
          <span className="text-xs text-gray-500">
            {selectedOption.label} •{' '}
            {selectedOption.fee === 0
              ? 'FREE'
              : `€${selectedOption.fee.toFixed(2)}`}
          </span>
        </div>
        <span
          className={`text-2xl text-gray-600 transition ${
            deliveryOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>

      {deliveryOpen && (
        <div className="bg-white p-5 sm:p-6 shadow-[0_15px_40px_rgba(15,23,42,0.08)] border border-gray-100">
          <p className="text-sm text-gray-700 mb-4">Select delivery option</p>

          <div className="space-y-3">
            {deliveryOptions.map((option) => {
              const isSelected = option.id === selectedDeliveryId;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onSelectDelivery(option.id)}
                  className={`w-full border p-3 flex items-center justify-between text-left transition ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {option.label}
                    </div>
                    <div className="text-xs text-gray-600">
                      {option.description}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">
                      {option.fee === 0
                        ? 'FREE'
                        : `€${option.fee.toFixed(2)}`}
                    </div>
                    {isSelected && (
                      <div className="text-xs text-blue-600 mt-1">
                        Selected
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button className="w-full bg-blue-950 text-white font-bold py-3 sm:py-4 hover:bg-blue-900 transition shadow-md text-sm sm:text-base">
        Next step
      </button>
    </div>
  );
}
