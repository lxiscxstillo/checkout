'use client';

export interface OrderItem {
  id: number;
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  icon: string;
  backgroundColor: string;
  borderColor: string;
}

interface OrderItemsProps {
  items: OrderItem[];
  isEditing: boolean;
  showDiscountInput: boolean;
  discountCode: string;
  onIncreaseQuantity: (id: number) => void;
  onDecreaseQuantity: (id: number) => void;
  onRemoveItem: (id: number) => void;
  onAddItem: () => void;
  onToggleEditing: () => void;
  onToggleDiscountInput: () => void;
  onDiscountCodeChange: (value: string) => void;
  onApplyDiscount: () => void;
}

export default function OrderItems({
  items,
  isEditing,
  showDiscountInput,
  discountCode,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
  onAddItem,
  onToggleEditing,
  onToggleDiscountInput,
  onDiscountCodeChange,
  onApplyDiscount,
}: OrderItemsProps) {
  return (
    <div className="bg-white p-6 sm:p-7 shadow-[0_25px_60px_rgba(15,23,42,0.16)] border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Order items</h2>
        <button
          onClick={onToggleEditing}
          className="text-blue-600 text-xs sm:text-sm font-medium hover:text-blue-500 transition flex items-center gap-1"
        >
          <span>✏️</span>
          <span>{isEditing ? 'Done editing' : 'Edit shopping cart'}</span>
        </button>
      </div>

      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={item.id}>
            <div className="flex gap-3 sm:gap-4">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br ${item.backgroundColor} rounded-lg flex items-center justify-center text-xl sm:text-2xl shrink-0 border ${item.borderColor}`}
              >
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  {item.description}
                </p>
                <p className="text-xs text-gray-600">
                  Quantity: {item.quantity} items
                </p>
              </div>
              <div className="text-right shrink-0 ml-2 flex flex-col items-end justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">
                    €{(item.unitPrice * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">
                    €{item.unitPrice.toFixed(2)} per item
                  </p>
                </div>
                {isEditing && (
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      type="button"
                      onClick={() => onDecreaseQuantity(item.id)}
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-700 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="text-xs font-semibold text-gray-800 w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onIncreaseQuantity(item.id)}
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-700 hover:bg-gray-100"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="ml-1 text-xs text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
            {idx < items.length - 1 && (
              <div className="border-t border-gray-200 mt-6" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <button
            type="button"
            onClick={onToggleDiscountInput}
            className="text-blue-600 text-xs font-medium hover:text-blue-700 transition text-left"
          >
            Have discount code? Click to enter it.
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={onAddItem}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              + Add item
            </button>
          )}
        </div>

        {showDiscountInput && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onApplyDiscount();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              value={discountCode}
              onChange={(event) => onDiscountCodeChange(event.target.value)}
              placeholder="Enter discount code (e.g. SAVE10)"
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
            >
              Apply
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
