# Templatify (Homework-6)
JavaScript utilities and tagged templates. Each task is organized into its own folder.

## Project Structure

```
/homework6
├── task-1
│   └── localize.js
├── task-2
│   └── highlightKeywords.js
├── task-3
│   └── multilineTags.js
├── task-4
│   ├── debounce.html
│   ├── debounce.css
│   └── debounce.js
├── task-5
│   ├── throttle.html
│   ├── throttle.css
│   └── throttle.js
├── task-6
│   └── curry.js
└── README.md
```

## Prerequisites

* **Node.js** (v12+ recommended) for running JavaScript files in tasks 1–3 and task 6.
* A modern web browser for opening HTML demos in tasks 4 and 5.

## Running the Examples

### Task 1: `localize` (Quasi-Tagged Template)

1. Navigate to its folder:

   ```bash
   cd task-1
   ```
2. Run with Node.js:

   ```bash
   node localize.js
   ```
3. Check the console for localized output.

### Task 2: `highlightKeywords` (Advanced Tagged Template)

1. Change into the folder:

   ```bash
   cd ../task-2
   ```
2. Execute:

   ```bash
   node highlightKeywords.js
   ```
3. Observe the highlighted template string in the console.

### Task 3: `multiline` (Multiline Tagged Template)

1. Move into its directory:

   ```bash
   cd ../task-3
   ```
2. Run:

   ```bash
   node multilineTags.js
   ```
3. The console will show the code snippet with numbered lines.

### Task 4: `debounce` Function

1. Open the demo in your browser:

   ```bash
   cd ../task-4
   open debounce.html     // macOS
   xdg-open debounce.html // Linux
   ```
2. Open the developer console and type (any characters) in the input field.
3. You’ll see the message appear only after 300 ms of inactivity.

### Task 5: `throttle` Function

1. In your browser:

   ```bash
   cd ../task-5
   open throttle.html     // macOS
   xdg-open throttle.html // Linux
   ```
2. With dev tools open, scroll the page.
3. Logs will fire at most once per second.

### Task 6: `curry` Function (with Placeholder Support)

1. Change into the folder:

   ```bash
   cd ../task-6
   ```
2. Run:

   ```bash
   node curry.js
   ```
3. Check the console for currying and placeholder examples.

## Notes

* All scripts include concise JSDoc comments.


