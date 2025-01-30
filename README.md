# Vite+React with Node backend

A sandbox on how to get Vite+React app to be served from a Node backend.

## Development Mode

Development mode let's you run the Vite+React app and the Node backend separately.

### Vite+React

```bash
cd frontend
npm install
npm run dev
```

UI will be served at [http://localhost:5173/](http://localhost:5173/) by default.

### Node backend

```bash
cd backend
npm install
npm run dev
```

Server will be served at [http://localhost:3000](http://localhost:3000) by default.

## Production Mode

Production mode let's you run the Vite+React app and the Node backend together.

### Add dependencies

```bash
cd frontend
npm install
```

```bash
cd backend
npm install
```

```bash
cd ..
npm install
```

### Run the app

```bash
npm run build
npm run dev
```

UI should be served from the backend at [http://localhost:3000](http://localhost:3000) by default.
