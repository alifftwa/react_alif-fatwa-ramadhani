**Rangkuman Materi React Testing - Testing Custom Hook:**

**1. Testing Custom Hook:**

- **Library yang Digunakan:**

  - **Jest:** Jest adalah kerangka pengujian JavaScript yang umum digunakan untuk aplikasi React. Jest menyertakan fitur seperti mocking, assertion, dan asynchronous testing.
  - **React Testing Library (RTL):** Digunakan bersama Jest untuk menguji komponen React. RTL fokus pada pengujian perilaku pengguna, memastikan bahwa aplikasi berperilaku seperti yang diharapkan oleh pengguna.

- **Implementasi:**

  - **Menyusun Test File:**

    - Buat file test dengan format nama yang sesuai, misalnya, `CustomHook.test.js`.
    - Import hook yang akan diuji dan pustaka-pustaka pengujian yang diperlukan.

  - **Menuliskan Test Case:**

    - Gunakan fungsi Jest seperti `test` atau `it` untuk menentukan kasus pengujian.
    - Gunakan fungsi-fungsi pengujian RTL seperti `render`, `fireEvent`, dan `screen` untuk menyimulasikan interaksi pengguna dan memeriksa hasil.

  - **Contoh Implementasi Testing Custom Hook:**

```jsx
// customHook.js
import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

export default useCounter;
```

```jsx
// CustomHook.test.js
import { render, fireEvent } from "@testing-library/react";
import useCounter from "./customHook";

test("useCounter hook increments and decrements count", () => {
  const { result } = renderHook(() => useCounter());

  // Initial count should be 0
  expect(result.current.count).toBe(0);

  // Increment count
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);

  // Decrement count
  act(() => {
    result.current.decrement();
  });
  expect(result.current.count).toBe(0);
});
```

- Dalam contoh di atas, `renderHook` dan `act` adalah fungsi-fungsi dari pustaka `react-hooks-testing-library` yang digunakan untuk menguji custom hook. Testing dilakukan dengan mengakses dan memanipulasi nilai kembalian hook.

- Penerapan pengujian custom hook ini memastikan bahwa hook berperilaku seperti yang diharapkan dan dapat diintegrasikan dengan komponen-komponen React secara efektif.
