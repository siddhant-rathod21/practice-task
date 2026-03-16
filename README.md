# Practice Task

Small sample project containing a frontend and a backend for trainees.

Structure
- `Trainee_Frontend/` — static site (index.html, script.js, style.css)
- `Backend/` — simple Express server (index.js)

Run backend
```bash
cd Backend
npm install
npm start
```

Run frontend
```bash

cd Trainee_Frontend
python3 -m http.server 8080
# open http://localhost:8080
```

API
- `GET /api/hello` — returns a sample JSON message from the backend.

Notes
- A `.gitignore` is included. To push, ensure you have an initial commit and the correct branch:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```
