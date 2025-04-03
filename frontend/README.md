# Image Enhancer Frontend

A modern React-based frontend for the Image Enhancer application, built with Vite, React, and Tailwind CSS.

## Features

- 🖼️ **Image Upload**: Drag and drop or click to upload images
- 🎨 **Multiple Enhancement Types**: Choose from various enhancement options
- ⚡ **Real-time Preview**: See your enhanced images instantly
- 📱 **Responsive Design**: Works seamlessly on all devices
- 💳 **Subscription Plans**: Free, Pro, and Enterprise pricing options

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Axios
- React Dropzone
- React Spinners

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Img-Enhancer.git
cd Img-Enhancer/frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Project Structure

```
frontend/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── utils/       # Utility functions
│   ├── assets/      # Images and other assets
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Entry point
├── .env             # Environment variables
├── vite.config.js   # Vite configuration
└── package.json     # Project dependencies
```

## Environment Variables

- `VITE_API_KEY`: API key for the image enhancement service

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
