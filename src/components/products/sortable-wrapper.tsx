'use client';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent, // ✅ Тип події
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setProductOrder } from '@/redux/slices/productOrderSlice';

export function SortableProductGrid({
  products,
  onReorder,
  renderItem,
  wrapperClassName = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6',
}: {
  products: Product[];
  onReorder: (items: Product[]) => void;
  renderItem: (product: Product) => React.ReactNode;
  wrapperClassName?: string;
}) {
  // 🔄 Стан, який містить поточний порядок елементів за їх id
  const [items, setItems] = useState<string[]>(products.map((p) => p.id));

  // 📦 Ініціалізація сенсорів DnD
  const sensors = useSensors(useSensor(PointerSensor));
  const dispatch = useAppDispatch();

  // 💾 отримати збережений порядок, якщо потрібно
  const savedOrder = useAppSelector((state) => state.productOrder.order);

  // 🧩 Синхронізуємо `items` при зміні `products`, наприклад при пагінації
  useEffect(() => {
    if (savedOrder.length > 0) {
      setItems(savedOrder);
    } else {
      setItems(products.map((p) => p.id));
    }
  }, [products, savedOrder]);

  // 🎯 Обробник завершення перетягування
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // 🛑 Перевірка на валідність перетягування
    if (!active || !over || active.id === over.id) return;

    const oldIndex = items.indexOf(active.id as string);
    const newIndex = items.indexOf(over.id as string);

    // 🛑 Якщо індекси некоректні — нічого не змінюємо
    if (oldIndex === -1 || newIndex === -1) return;

    // 🔀 Міняємо порядок id
    const newIds = arrayMove(items, oldIndex, newIndex);
    setItems(newIds);

    // 🔐 зберегти в Redux (і localStorage)
    dispatch(setProductOrder(newIds));

    // 🔁 Створюємо новий список продуктів у новому порядку
    const newProducts = newIds
      .map((id) => products.find((p) => p.id === id))
      .filter((p): p is Product => !!p); // Захист від undefined

    // 📤 Передаємо новий порядок назовні
    onReorder(newProducts);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {/* 📦 Обгортка з кастомним класом для гнучкої сітки */}
        <div className={wrapperClassName}>
          {items.map((id) => {
            const product = products.find((p) => p.id === id);
            if (!product) return null;
            return (
              <SortableProduct key={id} id={id}>
                {renderItem(product)}
              </SortableProduct>
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
}

// 🧱 Компонент-обгортка для сортування одного елемента
function SortableProduct({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  // 🧩 Обчислюємо CSS-трансформації для плавного перетягування
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}
