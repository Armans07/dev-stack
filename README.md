# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive web application that helps developers build their own technology stack by selecting technologies from different categories.

Users can explore technologies, view their details, add them to their personal stack, remove individual technologies, or clear the entire stack.



---

## 🛠️ Technology that me use:

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite
- HTML5
- CSS3
- Git & GitHub



## 📦 3 features about my project:

### 1. 🔄 Add & Remove Technologies
Users can remove individual technologies or use the "Remove All" button to clear the complete stack.

### 2. 🔔 Toast Notifications
React-Toastify is used to show notifications when technologies are added, removed, duplicated, or when the entire stack is cleared.

### 3. 📱 Responsive Design
The website is responsive and works smoothly on mobile, tablet, and desktop devices.


# ⚛️ React Questions & Answers

1. What is JSX, and why is it used in React?

Answer: JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and helps us create UI components easily.

2. What is the difference between props and state?

Answer: Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

3. What does the useState hook do, and where did you use it in this project?

Answer: useState is used to create and manage changing data in a React component. In this project, I used it to store the technology data, selected stack, and loading state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

Answer: useEffect is used to perform side effects in a React component. I used it to fetch the technology data from the JSON file when the application loads.

5. Why does every item in a .map() list need a unique key prop?

Answer: React uses the key prop to identify each item in a list. It helps React understand which items are added, removed, or changed.

Example:

technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
6. What is conditional rendering? Show one place you used it.

Answer: Conditional rendering means showing different UI based on a condition. I used it in the YourStack component to show an empty message when no technology is selected.

{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Answer: A parent component passes data to a child component using props. A child can send something back to the parent by calling a function that was passed through props.

Example:

<TechnologyCard
  technology={technology}
  isAdded={isAdded}
  onAdd={handleAddToStack}
/>