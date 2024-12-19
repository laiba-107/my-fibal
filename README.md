# User Management Application

Deployed Vercel link: https://my-fibal.vercel.app/

This project is a **User Management Application** built with **React**, featuring functionalities to add, edit, delete, search, and export user data. The application provides an intuitive interface to manage users and demonstrates modern front-end practices.

## Interface
![image](https://github.com/user-attachments/assets/5894e105-1313-4d7e-8dd9-7ee3acfc9f24)
![image](https://github.com/user-attachments/assets/c216c674-0e13-426c-ac40-8f3d62c82422)



## Features

- **Landing Page**: A visually appealing landing page with a background image and navigation to the main user management functionality.
- **Manage Users**:
  - Add new users with details like name, email, and avatar.
  - Edit existing user details.
  - Delete users.
  - Search for users by their first or last name.
  - Export user data as CSV or JSON files.
- **Responsive Design**: Optimized for different screen sizes using Bootstrap.

## Technologies Used

- **React**: Front-end framework for building the UI.
- **React Router**: For navigation between pages.
- **Bootstrap**: For styling and responsive design.
- **Axios**: For making HTTP requests to a mock REST API.
- **React-CSV**: For exporting user data as CSV files.
- **CSS**: Custom styling for additional design elements.


## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Usage

1. **Landing Page**:
   - Welcome screen with a "Go to Manage Users" button.
2. **Manage Users**:
   - Add a user by filling in the form and clicking "Add User".
   - Edit a user by clicking "Edit" on a user card and updating the form.
   - Delete a user by clicking "Delete" on a user card.
   - Search for a user using the search bar.
   - Export user data as CSV or JSON using the export buttons.

## API Details

- **Base URL**: `https://reqres.in/api`
- Endpoints Used:
  - `GET /users?page=1`: Fetch all users.
  - `POST /users`: Add a user.
  - `PUT /users/:id`: Edit a user.
  - `DELETE /users/:id`: Delete a user.

## Customization

- **Background Images**: Replace the background images in `LandingPage.css` or `Home.css`.
- **Styling**: Modify Bootstrap classes or custom CSS for personalized styles.

## Future Enhancements

- Add authentication for restricted access.
- Paginate the user list for large datasets.
- Enhance the export functionality to include filters and advanced options.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

