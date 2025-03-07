# Clinical Trial Application Management System

This project involves the development of a Clinical Trial Application Management System that allows users to submit, edit, download, view, and manage applications for regulatory and academic clinical trials. The system is designed to handle complex forms and store the data in a structured manner across multiple tables in a database.

The system provides a user-friendly interface with a drawer-based navigation system, allowing users to scroll through different sections of the form. The data is displayed using Mantine Table, a modern and flexible component for data visualization. Users can also delete or edit existing applications and download forms as PDFs for record-keeping.

## Key Features

1. **Form Management**: The application form is divided into multiple sub-forms, which are combined into a single large form on the client side. In the backend, the data is split and stored in separate tables.
   
2. **Drawer Navigation**: The UI uses a left drawer to navigate through different sections of the form, ensuring a smooth and intuitive user experience.
   
3. **Mantine Table**: The data is displayed using Mantine Table, which provides a modern and flexible way to view and manage application data.
   
4. **Delete Functionality**: Users can delete existing applications, ensuring easy management of records.
   
5. **Edit Functionality**: Users can now edit existing applications. This allows them to update previously submitted forms, ensuring the data remains accurate and up to date.
   
6. **PDF Export**: Users can download the form as a PDF document, allowing for easy offline storage and sharing of the clinical trial application data.

## Frontend Implementation

### Form Structure

The form is divided into multiple sections, each corresponding to a specific part of the clinical trial application (e.g., Participant Information, Benefits and Risks, Recruitment, etc.). Users can navigate through these sections using a left drawer, which allows them to scroll through the form and fill in the required details.

### Data Display

Submitted applications are displayed using Mantine Table, providing a modern and flexible way to view the data. Users can view, edit, delete, and download applications directly from the table.

### Delete and Edit Functionality

Each application has options to delete or edit. Users can remove or update existing applications from the system, ensuring proper record maintenance.

### PDF Export

A new feature allows users to download any application as a PDF document. This is useful for printing or archiving applications outside of the digital system.

## Backend Implementation

### Data Handling

When the user submits or edits the form, the data is sent to the backend as a single large JSON object. The backend splits the data and saves it into the respective tables in the database.

### PDF Generation

When downloading a form as a PDF, the backend dynamically generates the PDF using the application's data and sends it to the user for download.

## API Endpoints

- **GET /applications**: Fetches all applications for display in the table.
- **POST /applications**: Handles the submission of a new application.
- **PUT /applications/:id**: Handles the editing of an existing application.
- **DELETE /applications/:id**: Deletes an existing application.
- **GET /applications/:id/pdf**: Downloads the specified application as a PDF.

## Conclusion

This project provides a comprehensive solution for managing clinical trial applications, with a focus on user-friendly design and efficient data handling. The inclusion of editing and PDF export functionality further enhances the system, making it a powerful tool for managing clinical trial applications. The use of modern tools like Mantine Table and a drawer-based navigation system ensures a smooth and intuitive experience for users.
