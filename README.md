# HTML5 Geolocation to Address Converter (MapMyIndia API)

This is a Node.js and Express.js application that converts HTML5 geolocation coordinates into a human-readable address using India's geocoding services. The program exposes two APIs: `/` for the homepage and `/fetch` for backend communication. Using Reverse-Geocoding Method.

## Prerequisites

- Node.js (version X.X.X or higher)
- npm (version X.X.X or higher)
- MapMyIndia API KEY

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

1. Run `node index.js` to start the application.
2. Open a web browser and go to `http://localhost:8081` to access the homepage.
3. Grant permission to access your location when prompted.
4. The application will retrieve your coordinates and send them to India's geocoding service for address conversion.
5. The converted address will be displayed on the webpage or sent as a structured response.
6. To communicate with the backend, use the `/fetch` API endpoint.

## API Endpoints

### GET /

- Returns the homepage where users can grant permission to access their location.

### POST /fetch

- Communicates with the backend to convert coordinates to an address.
- Request Body:
  - `latitude`: The latitude coordinate.
  - `longitude`: The longitude coordinate.
- Response:
  - `address`: The converted address in json.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
